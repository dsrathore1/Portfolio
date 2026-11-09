const username = process.env.HASHNODE_USERNAME || "dsrathore1";

function cleanHost(value = "") {
  const raw = value.trim();
  if (!raw) return "";
  try {
    const parsed = new URL(raw.includes("://") ? raw : `https://${raw}`);
    if (parsed.hostname === "hashnode.com" || parsed.pathname.startsWith("/@"))
      return "";
    return parsed.host.replace(/\/$/, "");
  } catch {
    return raw
      .replace(/^https?:\/\//, "")
      .split("/")[0]
      .replace(/\/$/, "");
  }
}

function decodeXml(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .trim();
}

function getTag(block, tag) {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = block.match(
    new RegExp(`<${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escaped}\\s*>`, "i"),
  );
  if (match) return decodeXml(match[1]);
  const attr = block.match(
    new RegExp(`<${escaped}\\b[^>]*\\b(?:href|url)="([^"]+)"`, "i"),
  );
  return attr ? decodeXml(attr[1]) : "";
}

function plainText(html = "") {
  return decodeXml(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getImage(block, html) {
  const image =
    block.match(
      /<(?:media:content|media:thumbnail|enclosure)\b[^>]*\burl=["']([^"']+)["']/i,
    )?.[1] || html.match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i)?.[1];
  return image ? decodeXml(image) : null;
}

function parseFeed(xml) {
  const channelTitle = getTag(xml, "title");
  const itemBlocks = [
    ...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi),
    ...xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/gi),
  ].map((match) => match[1]);

  const posts = itemBlocks
    .map((block) => {
      const title = plainText(getTag(block, "title"));
      const url = getTag(block, "link") || getTag(block, "guid") || "";
      const description =
        getTag(block, "description") ||
        getTag(block, "content:encoded") ||
        getTag(block, "content") ||
        getTag(block, "summary");
      const date =
        getTag(block, "pubDate") ||
        getTag(block, "published") ||
        getTag(block, "updated") ||
        getTag(block, "dc:date");
      const tags = [
        ...block.matchAll(
          /<(?:category|dc:subject)\b[^>]*>([\s\S]*?)<\/(?:category|dc:subject)\s*>/gi,
        ),
      ]
        .map((match) => plainText(match[1]))
        .filter(Boolean);
      const html = decodeXml(description);
      let publishedAt = null;
      if (date) {
        const parsed = new Date(date);
        if (!Number.isNaN(parsed.getTime())) publishedAt = parsed.toISOString();
      }
      let slug = "";
      try {
        slug = new URL(url).pathname.split("/").filter(Boolean).pop() || "";
      } catch {
        slug = url.split("/").filter(Boolean).pop() || "";
      }

      return {
        id: getTag(block, "guid") || url || `${title}-${date}`,
        title,
        brief: plainText(html).slice(0, 260),
        slug,
        url,
        publishedAt,
        readTimeInMinutes: null,
        coverImage: getImage(block, html),
        tags,
      };
    })
    .filter((post) => post.title && /^https?:\/\//i.test(post.url));

  return { title: channelTitle, posts };
}

const DEFAULT_PUBLICATION_HOSTS = [
  "ml-meets-math.hashnode.dev",
  "k8s-diaries.hashnode.dev",
];

function getPublicationHosts() {
  const configured = (process.env.HASHNODE_PUBLICATION_HOSTS || "")
    .split(",")
    .map(cleanHost)
    .filter(Boolean);
  const legacy = cleanHost(process.env.HASHNODE_PUBLICATION_HOST || "");
  const candidates = [...configured, ...DEFAULT_PUBLICATION_HOSTS];
  if (legacy) candidates.unshift(legacy);
  return [...new Set(candidates)];
}

async function fetchPublication(host) {
  const feedUrl = `https://${host}/rss.xml`;
  try {
    const response = await fetch(feedUrl, {
      headers: {
        Accept:
          "application/rss+xml, application/atom+xml, application/xml, text/xml",
      },
      next: { revalidate: 1800 },
    });
    if (!response.ok) {
      return {
        host,
        ok: false,
        message: `RSS feed returned HTTP ${response.status}.`,
        posts: [],
      };
    }

    const xml = await response.text();
    if (!/<(?:rss|feed)\b/i.test(xml)) {
      return {
        host,
        ok: false,
        message: "The response was not a valid RSS or Atom feed.",
        posts: [],
      };
    }

    const feed = parseFeed(xml);
    const publicationUrl = `https://${host}`;
    const posts = feed.posts.map((post) => ({
      ...post,
      publicationHost: host,
      publicationTitle: feed.title || host,
      publicationUrl,
    }));

    return {
      host,
      ok: true,
      publicationTitle: feed.title || host,
      publicationUrl,
      feedUrl,
      posts,
      count: posts.length,
      message: posts.length
        ? null
        : "No public articles were found in this feed yet.",
    };
  } catch (error) {
    return {
      host,
      ok: false,
      message: error.message || "Could not fetch this RSS feed.",
      posts: [],
    };
  }
}

export async function getHashnodePosts() {
  const hosts = getPublicationHosts();
  const publications = await Promise.all(hosts.map(fetchPublication));
  const posts = publications
    .flatMap((publication) => publication.posts)
    .sort((a, b) => {
      const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return bTime - aTime;
    });

  return {
    ok: publications.some((publication) => publication.ok),
    publications,
    posts,
    count: posts.length,
    publicationCount: publications.filter((publication) => publication.ok)
      .length,
    message: posts.length
      ? null
      : "No public articles could be loaded. Check that each publication is public and its RSS feed is available.",
  };
}

export async function getHashnodePostBySlug(slug) {
  const result = await getHashnodePosts();
  return result.posts.find((post) => post.slug === slug) || null;
}
