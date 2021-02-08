<p align="center">
  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/81/helicopter_1f681.png" />
</p>
<p align="center">
|
<br/>
|
<br/>
|
<br/>
  <b>Airdrops</b> && <b>POAPs</b>
</p>
<br/>

> 🚁 Claimable aggregates all known Ethereum airdrops and POAPs on one page.

> 🤑 If you use DeFi you might have money waiting you don't know about!

<br/>

## Want to add an airdrop or POAP?

### Option 1

There are two good ways. One is to [open an issue](https://github.com/dawsbot/claimable/issues/new) and **link to the airdrop data source**. A link like this for example https://gist.githubusercontent.com/banteg/12708815fb63239d9f28dec5df8641f9/raw/28a9dffe9d5681ef5f75b0ab6c39fe5ea0064712/1inch.csv is all you need in the issue. I'll take care of the rest.

### Option 2

1. Add the airdrop data source to the claimable lists.

- If the source data is csv, add the file to the [csv-claimables](src/csv-claimables.ts).
- If the source data is json, add the file to the [json-claimables](src/json-claimables.ts).

2. Run `npm run build:claimable-data` (also ran on commit automatically in-case you forget)
3. Verify this created a new source file in `src/claimable-data/*` and that the master address data looks correct in `src/claimable-data/master-airdrop-data.json`

<br/>

## Web App Development

```bash
npm i && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing pages in `pages/*`. They auto-update on save.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
