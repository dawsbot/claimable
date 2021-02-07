<p align="center">
  <a href="https://dark-triangle.now.sh/"><img src="https://avatars2.githubusercontent.com/u/49670561" width="400"/></a>
  <br/>
  <b>Claimable</b>
  <br/>
  <br/>
</p>

> 🤑 If you use Ethereum DeFi you might have money waiting you don't know about!

> 🚁 Claimable aggregates all known airdrops and POAPs on one page.

<br/>

## Want to add an airdrop or POAP?

1. Add the airdrop data source to the claimable lists.

- If the source data is csv, add the file to the [csv-claimables](src/csv-claimables.ts).
- If the source data is json, add the file to the [json-claimables](src/json-claimables.ts).

2. Run `npm run build:claimable-data` (also ran on commit automatically in-case you forget)
3. Verify this created a new source file in `src/claimable-data/*` and that the master address data looks correct in `src/claimable-data/master-airdrop-data.json`

<br/>

## Web App Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing pages in `pages/*`. They auto-update on save.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
