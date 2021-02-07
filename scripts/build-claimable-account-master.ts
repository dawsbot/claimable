// Only needs to be run once or once-in-awhile
// This script fetches the various csv's, converts them to json, and saves the files in src/claimable-data/*
import { csvClaimables } from "../src/csv-claimables";
import { jsonClaimables } from "../src/json-claimables";
const fs = require("fs");
const path = require("path");

const claimableDataDir = path.resolve(__dirname, "..", "src", "claimable-data");

const masterData = {};

async function main() {
  // csv claimables
  for (const [protocolName, value] of Object.entries(csvClaimables)) {
    const jsonContents = JSON.parse(
      fs.readFileSync(
        path.join(claimableDataDir, `${protocolName}.json`),
        "utf8"
      )
    );

    jsonContents.forEach((drop) => {
      let address;
      let quantityDropped;

      // tornado csv does not have headers
      if (protocolName === "tornado") {
        address = drop[0].toLowerCase();
        quantityDropped = drop[1];
      } else {
        address = drop.address.toLowerCase();
        quantityDropped = drop[value.tokenNamed];
      }

      if (masterData[address]) {
        // avoid overwriting existing networks
        masterData[address][protocolName] = quantityDropped;
      } else {
        masterData[address] = {
          [protocolName]: quantityDropped,
        };
      }
    });
  }

  // json claimables
  for (const [protocolName, value] of Object.entries(jsonClaimables)) {
    const jsonContents = JSON.parse(
      fs.readFileSync(
        path.join(claimableDataDir, `${protocolName}.json`),
        "utf8"
      )
    );

    for (const bigAddress of Object.keys(jsonContents)) {
      const address = bigAddress.toLowerCase();
      if (masterData[address]) {
        // avoid overwriting existing networks
        masterData[address][protocolName] = "1";
      } else {
        masterData[address] = {
          [protocolName]: "1",
        };
      }
    }
  }

  fs.writeFileSync(
    path.join(claimableDataDir, `master-airdop-data.json`),
    JSON.stringify(masterData, null, 2)
  );
}

main();
