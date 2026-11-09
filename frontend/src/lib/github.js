import { FEATURED_REPOSITORIES } from "@/data/site";
import { normalizeRepoName } from "@/lib/utils";

const username = process.env.GITHUB_USERNAME || "dsrathore1";

export async function getGithubPortfolio() {
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
  };

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated&type=owner`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return { ok: false, username, repositories: [], metrics: null, message: `GitHub returned ${response.status}. Public data may be rate-limited.` };
    }

    const allRepos = await response.json();
    const selected = FEATURED_REPOSITORIES.map((requestedName) => {
      const repo = allRepos.find((item) => normalizeRepoName(item.name) === normalizeRepoName(requestedName));
      if (!repo) return { requestedName, found: false };
      return {
        requestedName,
        found: true,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
        archived: repo.archived,
      };
    });

    const found = selected.filter((repo) => repo.found);
    return {
      ok: true,
      username,
      repositories: selected,
      metrics: {
        selectedCount: FEATURED_REPOSITORIES.length,
        foundCount: found.length,
        stars: found.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0),
        forks: found.reduce((sum, repo) => sum + (repo.forks_count || 0), 0),
      },
      message: null,
    };
  } catch {
    return { ok: false, username, repositories: [], metrics: null, message: "GitHub data is temporarily unavailable." };
  }
}
