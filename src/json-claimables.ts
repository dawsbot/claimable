// original inspiration from https://gist.github.com/nicholashc/0b1be0c6308232ad559efdcda36f71cb
type AirDrop = {
  url: string;
  imgSrc?: string;
  claimUrl?: string;
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
  },
  "poap-beacon-chain-first-1024": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/beacon-chain-first-1024.json",
  },
  "poap-beacon-chain-first-32769": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/beacon-chain-first-32769.json",
  },
  "poap-coin-gecko-yield-farming": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/coin-gecko-yield-farming.json",
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
  },
  "poap-keep-stakers": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/keep-stakers.json",
  },
  "poap-lumberjackers": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/lumberjackers.json",
  },
  "poap-medalla": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/medalla.json",
  },
  "poap-muir-glacier": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/muir-glacier.json",
  },
  "poap-proof-of-gucci-design-competition": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/proof-of-gucci-design-competition.json",
  },
  "poap-proof-of-gucci": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/proof-of-gucci.json",
  },
  "poap-resuscitators": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/resuscitators.json",
  },
  "poap-yam": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/yam.json",
  },
  "poap-ycover": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/ycover.json",
  },
  "poap-yfi-og": {
    url:
      "https://raw.githubusercontent.com/poap-xyz/poap-delivery/development/app/src/lib/events/yfi-og.json",
  },
};
