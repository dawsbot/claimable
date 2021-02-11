import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { jsonClaimables } from "../json-claimables";
import { AirDrop, csvClaimables, ProtocolName } from "../csv-claimables";

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
  align-items: center;
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

const ProtocolImage = styled(Image)`
  border-radius: 6px;
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
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

// snapshot does not have accurate pricing data for the following
const priceBlacklist: ProtocolName[] = ["tornado-cash", "curve-dao-token"];
export const ClaimPretty = ({ claimables }) => {
  const [prices, setPrices] = useState({});
  // componentDidMount
  useEffect(() => {
    fetchPrices(
      Object.keys(claimables)
        .filter((tokenName) => !tokenName.includes("poap"))
        .filter(
          (tokenName: ProtocolName) => !priceBlacklist.includes(tokenName),
        ),
    ).then((priceData) => {
      setPrices(priceData);
    });
  }, []);

  const computeValue = (
    protocolName: string,
    claimableData: AirDrop,
    amount: string,
  ) => {
    // not yet fetched or blacklisted
    if (!prices[protocolName]) {
      return `${claimableData.displayName || ""} airdrop`;
    } else {
      const unitPrice = prices[protocolName][CURRENCY];
      const totalValue = formatter.format(unitPrice * Number(amount));
      return `${totalValue} ${claimableData.displayName}`;
    }
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
            <div style={{ width: "120px", height: "120px" }}>
              <ProtocolImage
                src={imgSrc}
                width={120}
                height={120}
                quality={100}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              Claim{" "}
              {protocolName.includes("poap")
                ? "POAP"
                : computeValue(
                    protocolName,
                    claimableData as any,
                    amount as string,
                  )}
            </div>
          </ClaimableAnchor>
        );
      })}
    </Container>
  );
};
