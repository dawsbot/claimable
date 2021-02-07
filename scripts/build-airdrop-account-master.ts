// Only needs to be run once or once-in-awhile
// This script fetches the various csv's, converts them to json, and saves the files in src/airdrop-data/*
import { airdrops } from "../src/airdrops";
const fs = require("fs");
const path = require("path");

const airdropDataDir = path.resolve(__dirname, "..", "src", "airdrop-data");

const masterData = {};

async function main() {
  for (const [protocolName, value] of Object.entries(airdrops)) {
    const jsonContents = JSON.parse(
      fs.readFileSync(path.join(airdropDataDir, `${protocolName}.json`), "utf8")
    );

    // if (protocolName === "furucombo") {
    jsonContents.forEach((drop) => {
      let address;
      let quantityDropped;

      // tornado csv does not have headers
      if (protocolName === "tornado") {
        address = drop[0];
        quantityDropped = drop[1];
      } else {
        address = drop.address;
        quantityDropped = drop[value.tokenNamed];
      }

      if (masterData[address]) {
        // avoid overwriting existing networks
        masterData[address][protocolName] = quantityDropped;
      } else {
        masterData[drop.address] = {
          [protocolName]: quantityDropped,
        };
      }
    });
  }

  fs.writeFileSync(
    path.join(airdropDataDir, `master-airdop-data.json`),
    JSON.stringify(masterData, null, 2)
  );
}

main();
