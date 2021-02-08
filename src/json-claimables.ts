// original inspiration from https://gist.github.com/nicholashc/0b1be0c6308232ad559efdcda36f71cb
type AirDrop = {
  url: string;
  imgSrc: string;
  claimUrl: string;
};
type AirDrops = {
  [tokenName: string]: AirDrop;
};
export const jsonClaimables: AirDrops = {
  // all poaps listed at https://github.com/poap-xyz/poap-delivery/tree/development/app/src/lib/events
  // TODO: pull from this directory dynamically
  "poap-aave-v2-pioneers": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/aave-v2-pioneers.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/aave-v2-pionners-nft-2020-logo-1606988227748.png",
    claimUrl: "https://poap.delivery/aave-v2-pioneers",
  },
  "poap-beacon-chain-first-1024": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/beacon-chain-first-1024.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/beacon-chain-first-1024-depositors-and-proposers-2021-logo-1610143811247.png",
    claimUrl: "https://poap.delivery/beacon-chain-first-1024",
  },
  "poap-beacon-chain-first-32769": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/beacon-chain-first-32769.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/beacon-chain-first-32769-block-validators-2021-2021-logo-1611528225519.png",
    claimUrl: "https://poap.delivery/beacon-chain-first-32769",
  },
  "poap-coin-gecko-yield-farming": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/coin-gecko-yield-farming.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/coingecko-yam-yield-farmer-2020-logo-1602423064868.png",
    claimUrl: "https://poap.delivery/coin-gecko",
  },
  "poap-eth2-genesis": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/eth2-genesis.json",
    imgSrc:
      "/images/json-claimables/beacon-chain-genesis-depositor-2020-logo-1609033712464.png",
    claimUrl: "https://poap.delivery/eth2-genesis/",
  },
  "poap-half-rekt": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/half-rekt.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/halfrekt-2020-logo-1601513643094.png",
    claimUrl: "https://poap.delivery/half-rekt",
  },
  "poap-keep-stakers": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/keep-stakers.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/keep-network-mainnet-stakers-2020-logo-1607295999088.png",
    claimUrl: "https://poap.delivery/keep-stakers",
  },
  "poap-lumberjackers": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/lumberjackers.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/false-start-lumberjackers-2020-logo-1606514369388.png",
    claimUrl: "https://poap.delivery/lumberjackers",
  },
  "poap-medalla": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/medalla.json",
    imgSrc: "https://storage.googleapis.com/poapmedia/medalla-validators.png",
    claimUrl: "https://poap.delivery/medalla",
  },
  "poap-muir-glacier": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/muir-glacier.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/muir-glacier-ethereum-mainnet-hard-fork-2020-logo-1589843256434.png",
    claimUrl: "https://poap.delivery/muir-glacier",
  },
  "poap-proof-of-gucci-design-competition": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/proof-of-gucci-design-competition.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/proof-of-gucci-design-competition-2020-logo-1599058118153.png",
    claimUrl: "https://poap.delivery/proof-of-gucci-design",
  },
  "poap-proof-of-gucci": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/proof-of-gucci.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/proof-of-gucci-2020-logo-1599058054046.png",
    claimUrl: "https://poap.delivery/proof-of-gucci",
  },
  "poap-resuscitators": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/resuscitators.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/medalla-testnet-resuscitator-2020-logo-1598019050780.png",
    claimUrl: "https://poap.delivery/medalla-resuscitator",
  },
  "poap-yam": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/yam.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/yam-heros-2020-logo-1597862089982.png",
    claimUrl: "https://poap.delivery/yam",
  },
  "poap-ycover": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/ycover.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/a-new-face-for-ycover-2020-logo-1604601079479.png",
    claimUrl: "https://poap.delivery/ycover",
  },
  "poap-yfi-og": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/yfi-og.json",
    imgSrc:
      "https://storage.googleapis.com/poapmedia/i-played-4-yfi-2020-logo-1604247754471.png",
    claimUrl: "https://poap.delivery/yfi-og",
  },
};
