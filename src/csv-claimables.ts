// original inspiration from https://gist.github.com/nicholashc/0b1be0c6308232ad559efdcda36f71cb
export type AirDrop = {
  url: string;
  tokenNamed: string;
  imgSrc: string;
  claimUrl: string;

  displayName: string;
};
export type ProtocolName = keyof typeof csvClaimables;

export const csvClaimables = {
  // these names must corespond exactly to coingecko's token URL (https://www.coingecko.com/en/coins/uniswap)
  uniswap: {
    url:
      "https://raw.githubusercontent.com/banteg/uniswap-distribution/master/uniswap-distribution.csv",
    // tokens called "uni" in csv
    tokenNamed: "uni",

    // displayed on UI
    imgSrc: "/images/csv-claimables/uni.svg",
    claimUrl: "https://app.uniswap.org/",
    displayName: "UNI",
  },
  "1inch": {
    url:
      "https://gist.githubusercontent.com/banteg/12708815fb63239d9f28dec5df8641f9/raw/28a9dffe9d5681ef5f75b0ab6c39fe5ea0064712/1inch.csv",
    tokenNamed: "tokens",

    imgSrc: "/images/csv-claimables/1inch.svg",
    claimUrl: "https://1inch.exchange/",
    displayName: "1INCH",
  },
  // no csv header at all
  "tornado-cash": {
    url:
      "https://raw.githubusercontent.com/tornadocash/airdrop/master/airdrop.csv",
    tokenNamed: "no-header",

    imgSrc: "/images/csv-claimables/torn.jpeg",
    claimUrl: "https://app.tornado.cash/airdrop/",
    displayName: "TORN",
  },
  // Badger no longer valid
  // https://twitter.com/devinanderson/status/1358712533255933952?s=20
  // badger: {
  //   url:
  //     "https://gist.githubusercontent.com/banteg/9ad5fdd2e169a03cc5d93478ece10a38/raw/9b14f2fd933d8a817ff6773e4d4854832b02c4b8/badger.csv",
  //   tokenNamed: "badger",

  //   imgSrc: "/images/csv-claimables/badger.jpeg",
  //   claimUrl: "https://app.badger.finance/airdrops",
  // },
  furucombo: {
    url:
      "https://gist.githubusercontent.com/nicholashc/c96d6b41e33d1245ecdaaea33fa6fab0/raw/05d3042e034c2ea99d7084789962aa95a3330f04/combo.csv",
    tokenNamed: "tokens",

    imgSrc: "/images/csv-claimables/furucombo.png",
    claimUrl: "https://furucombo.app/combo",

    displayName: "COMBO",
  },
  // https://twitter.com/harris_s0n/status/1358725157582303234?s=20
  // stakeDAO: {
  //   url:
  //     "https://gist.githubusercontent.com/nicholashc/d380275aa8118e018906feeda3a92be5/raw/07f4a09dd657a27080cc75eda5e864acc030af5f/stakedao.csv",
  //   tokenNamed: "tokens",

  //   imgSrc: "/images/csv-claimables/stake-DAO.jpg",
  //   claimUrl: "https://stakedao.org/",
  // },
  "curve-dao-token": {
    url:
      "https://gist.githubusercontent.com/nicholashc/f4a34c138087195237556077ea6490d7/raw/bfdf0a9886747dfe3465a2e8ea1bfb02ae0386ac/curve.csv",
    tokenNamed: " token",

    imgSrc: "/images/csv-claimables/curve.jpeg",
    claimUrl: "https://dao.curve.fi/minter/vesting/",

    displayName: "CRV",
  },
  // clawback expired
  // https://twitter.com/devinanderson/status/1358721412509429761?s=20
  // digg: {
  //   url:
  //     "https://gist.githubusercontent.com/nicholashc/c21788b0f0391d0d2d2cdcc44940a0e3/raw/0dbdc85e0ebc4d2aaa7cda49d5aaeb903fef69c7/digg.csv",
  //   tokenNamed: " token",

  //   imgSrc: "/images/csv-claimables/digg.png",
  //   claimUrl:
  //     "https://badgerdao.medium.com/digg-at-a-glance-complete-guide-d0dc2c29d303",
  // },
} as const;
