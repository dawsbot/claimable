import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { jsonClaimables } from "../json-claimables";
import { csvClaimables } from "../csv-claimables";

const Container = styled.div`
  display: flex;
  margin-top: 40px;
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

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const ClaimPretty = ({ claimables }) => {
  return (
    <Container>
      {Object.entries(claimables).map(([protocolName, amount]) => {
        const claimableData =
          csvClaimables[protocolName] || jsonClaimables[protocolName];
        const imgSrc = claimableData?.imgSrc;
        if (imgSrc) {
          return (
            <ClaimableAnchor
              href={claimableData?.claimUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={imgSrc} width={120} height={120} />
              <div style={{ marginTop: "20px" }}>Click to claim</div>
            </ClaimableAnchor>
          );
        }
      })}
    </Container>
  );
};
