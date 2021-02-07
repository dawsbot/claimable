import { NextApiRequest, NextApiResponse } from "next";
const masterClaimableData = require("../../../src/claimable-data/master-airdop-data.json");

export default async (req: NextApiRequest, response: NextApiResponse<any>) => {
  let {
    query: { address },
  } = req;

  address = (address as string).toLowerCase();
  const matchingData = masterClaimableData[address];
  if (matchingData) {
    return response.send(matchingData);
  } else {
    return response
      .status(424)
      .json({ message: `nothing claimable found for address ${address}` });
  }
};
