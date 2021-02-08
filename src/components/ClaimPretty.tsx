import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { jsonClaimables } from "../json-claimables";
import { csvClaimables } from "../csv-claimables";

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
`;
const ClaimableImg = styled(Image)`
  max-width: 140px;
`;

const ClaimableAnchor = styled.a`
  border: 1px solid black;
  border-radius: 6px;
  padding: 20px;
  margin: 6px;
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  color: black;
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
              <ClaimableImg src={imgSrc} width={140} height={140} />
              <div style={{ marginTop: "20px" }}>Click to claim</div>
            </ClaimableAnchor>
          );
        }
      })}
    </Container>
  );
};
