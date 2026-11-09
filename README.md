# Digpal Singh Rathore — Portfolio

A responsive, dark, minimal personal portfolio built with **Next.js App Router, JavaScript, Tailwind CSS and Framer Motion**.

## Highlights

- Home, About, Projects, Achievements, Blogs, Coding Journey and Contact pages.
- Dynamic project detail pages and Hashnode article detail pages.
- GitHub integration for five selected repositories.
- Hashnode GraphQL integration for published posts.
- Live, verifiable portfolio metrics: selected repositories found, GitHub stars, GitHub forks and published articles.
- Configuration-derived metrics: selected projects, coding platforms and career goals.
- No fabricated coding ratings, solved counts, certifications or achievements.
- Dark glass-inspired UI using Ultimate Gray and Illuminating yellow, with animated ambient lighting, floating hero artwork, staggered reveals and responsive hover motion.
- Lightweight motion with reduced-motion accessibility support.
- Contact via `mailto:`; no contact backend or database required.

## Requirements

- Node.js 20.9+
- npm

## Run locally

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

```env
GITHUB_USERNAME=dsrathore1
GITHUB_TOKEN=
HASHNODE_USERNAME=dsrathore1
HASHNODE_PUBLICATION_HOST=
HASHNODE_PUBLICATION_HOST=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=dsrathorebsw1234@gmail.com
```

`GITHUB_TOKEN` is optional for public repositories. If supplied, keep it server-side and never prefix it with `NEXT_PUBLIC_`.

For Hashnode, add your Personal Access Token as `HASHNODE_PUBLICATION_HOST` (or `HASHNODE_ACCESS_TOKEN`) in `frontend/.env.local` and in Vercel server environment variables. Never prefix it with `NEXT_PUBLIC_`, commit it, or paste it into source code. Set `HASHNODE_PUBLICATION_HOST` to your publication's actual host (for example, `your-blog.hashnode.dev` or your custom domain), not your `hashnode.com/@username` profile URL. Hashnode publication-scoped GraphQL reads currently require an eligible Pro publication as well as a token.

## Selected repositories

The featured repository names are configured in `frontend/src/data/site.js`:

- CipherVault
- SAGE
- SVMForge
- PulsarGuard
- Federated Learning IDS

Matching ignores case, spaces, underscores and hyphens. If the GitHub repository slug differs, edit `FEATURED_REPOSITORIES` to match its exact GitHub repository name.

## Metrics and accuracy

- GitHub stars, forks, repository count and last-updated timestamps are fetched from GitHub.
- Published blog count is fetched from Hashnode when the publication API is available.
- The number of selected projects, coding platforms and career goals is derived from the portfolio configuration.
- DSA platform ratings and solved counts are deliberately not invented. Add verified values in `src/data/site.js` only when you want to maintain them manually.
- AWS SAA, AWS ML and GSoC appear as future goals, not completed credentials.

## Vercel deployment

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Set **Root Directory** to `frontend`.
4. Add the environment variables above in Vercel → Project Settings → Environment Variables.
5. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
6. Deploy. Redeploy after changing environment variables.

No separate FastAPI service is needed for this version. Next.js Route Handlers provide server-side API access and caching. A separate backend can be introduced later if you need authentication, persistent user data or more complex workflows.

## Useful scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Structure

See `frontend/README.md` for routes, integration details and customization points.

### Multiple Hashnode publications

Set `HASHNODE_PUBLICATION_HOSTS` to a comma-separated list of public publication hostnames:

```env
HASHNODE_PUBLICATION_HOSTS=ml-meets-math.hashnode.dev,k8s-diaries.hashnode.dev
```

To add another publication later, append its hostname to this environment variable in `.env.local` and your Vercel project settings, then redeploy. The portfolio will fetch its public `/rss.xml` feed automatically. No Hashnode access token or Pro plan is used by this RSS integration.
