# Frontend

Next.js App Router application written entirely in JavaScript.

## Run
```bash
cp .env.example .env.local
npm install
npm run dev
```

## Routes
- `/` — Home
- `/about` — About and skills
- `/projects` — GitHub-powered selected projects
- `/projects/[slug]` — Project detail
- `/achievements` — Verified achievements area and future goals
- `/blogs` — Hashnode articles
- `/blogs/[slug]` — Article preview and original article link
- `/coding` — DSA and competitive-programming journey
- `/contact` — Contact details and mailto action

## API routes
- `GET /api/github` — selected repositories and aggregate GitHub metrics
- `GET /api/hashnode` — published Hashnode articles and article count

## Customization
- Personal details, social links, featured repositories, skills, goals and coding platforms: `src/data/site.js`
- Theme and visual styling: `src/app/globals.css`
- Navigation, footer and reusable UI: `src/components`
- GitHub and Hashnode integrations: `src/lib` and `src/app/api`

## Hashnode token setup
After copying `.env.example` to `.env.local`, add your Hashnode Personal Access Token to one of these server-only variables:
```env
HASHNODE_PUBLICATION_HOST=your_personal_access_token
# or HASHNODE_ACCESS_TOKEN=your_personal_access_token
HASHNODE_PUBLICATION_HOST=your-publication.hashnode.dev
```
Use the publication's actual host, not the `hashnode.com/@username` profile URL. Add the same variables in Vercel → Project Settings → Environment Variables, then redeploy. Hashnode publication-scoped GraphQL reads currently require an eligible Pro publication as well as a token.

## Security
Never commit `.env.local`, expose the token through a `NEXT_PUBLIC_` variable, or put it in client-side code. The Hashnode token is read and sent only by the server integration.


### Multiple Hashnode publications

Set `HASHNODE_PUBLICATION_HOSTS` to a comma-separated list of public publication hostnames:

```env
HASHNODE_PUBLICATION_HOSTS=ml-meets-math.hashnode.dev,k8s-diaries.hashnode.dev
```

To add another publication later, append its hostname to this environment variable in `.env.local` and your Vercel project settings, then redeploy. The portfolio will fetch its public `/rss.xml` feed automatically. No Hashnode access token or Pro plan is used by this RSS integration.