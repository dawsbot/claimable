import { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";

const masterClaimableData = require("../../../src/claimable-data/master-airdop-data.json");
export default async (req: NextApiRequest, response: NextApiResponse<any>) => {
  let {
    query: { address },
  } = (req as any) as { query: { address: string } };

  // ENS resolve required
  if (address.endsWith(".eth")) {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.INFURA_RPC_MAINNET,
    );
    address = await provider.resolveName(address);
  }

  address = address.toLowerCase();
  const matchingData = masterClaimableData[address];
  if (matchingData) {
    return response.send(matchingData);
  } else {
    return response
      .status(424)
      .json({ message: `nothing claimable found for address ${address}` });
  }
};
