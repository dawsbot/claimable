import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { jsonClaimables } from "../json-claimables";
import { AirDrop, csvClaimables } from "../csv-claimables";

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  /* mobile  */
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const ClaimableAnchor = styled.a`
  border: 1px solid black;
  border-radius: 6px;
  padding: 30px;
  margin: 6px;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  color: black;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.2s;
  font-size: 17px;
  font-weight: 500;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    text-decoration: underline;
  }
`;

// hardcoded for now
const CURRENCY = "usd";

const fetchPrices = (coingeckoIDs: string[]) => {
  return fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coingeckoIDs.join(
      "%2C",
    )}&vs_currencies=${CURRENCY}`,
  ).then((res) => res.json());
};

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const ClaimPretty = ({ claimables }) => {
  const [prices, setPrices] = useState({});
  // componentDidMount
  useEffect(() => {
    fetchPrices(
      Object.keys(claimables).filter(
        (tokenName) => !tokenName.includes("poap"),
      ),
    ).then((priceData) => {
      setPrices(priceData);
    });
  }, []);

  const computeValue = (claimableData: AirDrop, amount: string) => {
    // not yet fetched
    if (!prices[claimableData.coingeckoID]) {
      return `${claimableData.displayName || ""} airdrop`;
    } else {
      const unitPrice = prices[claimableData.coingeckoID][CURRENCY];
      const totalValue = formatter.format(unitPrice * Number(amount));
      return `${totalValue} ${claimableData.displayName}`;
    }
    // const tokenPrices = await fetchPrices()
  };

  return (
    <Container>
      {Object.entries(claimables).map(([protocolName, amount]) => {
        const claimableData =
          csvClaimables[protocolName] || jsonClaimables[protocolName];
        const imgSrc = claimableData.imgSrc;
        return (
          <ClaimableAnchor
            href={claimableData.claimUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={claimableData.claimUrl}
          >
            <Image src={imgSrc} width={120} height={120} />
            <div style={{ marginTop: "20px" }}>
              Claim{" "}
              {protocolName.includes("poap")
                ? "POAP"
                : computeValue(claimableData as any, amount as string)}
            </div>
          </ClaimableAnchor>
        );
      })}
    </Container>
  );
};
