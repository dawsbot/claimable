// Only needs to be run once or once-in-awhile
// This script fetches the various csv's, converts them to json, and saves the files in src/airdrop-data/*
import { airdrops } from "../src/airdrops";
const parse = require("csv-parse/lib/sync");
const fs = require("fs");
const path = require("path");

const fetch = require("node-fetch");

const airdropDataDir = path.resolve(__dirname, "..", "src", "airdrop-data");

async function main() {
  for (const [protocolName, value] of Object.entries(airdrops)) {
    let parseOptions: any = {
      columns: true,
      skip_empty_lines: true,
    };

    // tornado csv does not have headers
    if (protocolName === "tornado") {
      parseOptions = {
        skip_empty_lines: true,
      };
    }

    const response = await fetch(value.url);
    const body = await response.text();
    let jsonRes = parse(body, parseOptions);

    fs.writeFileSync(
      path.join(airdropDataDir, `${protocolName}.json`),
      JSON.stringify(jsonRes, null, 2)
    );
  }
}

main();
