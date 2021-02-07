// Only needs to be run once or once-in-awhile
// This script fetches the various csv's, converts them to json, and saves the files in src/claimable-data/*
// import { csvClaimables } from "../src/csv-claimables";

import { csvClaimables } from "../src/csv-claimables";
import { jsonClaimables } from "../src/json-claimables";

// import { jsonClaimables } from "../src/json-claimables";
const parse = require("csv-parse/lib/sync");
const fs = require("fs");
const path = require("path");

const fetch = require("node-fetch");

const claimableDataDir = path.resolve(__dirname, "..", "src", "claimable-data");

async function main() {
  for (const [protocolName, value] of Object.entries(csvClaimables)) {
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
      path.join(claimableDataDir, `${protocolName}.json`),
      JSON.stringify(jsonRes, null, 2)
    );
  }

  for (const [protocolName, value] of Object.entries(jsonClaimables)) {
    const response = await fetch(value.url);
    const jsonRes = await response.json();

    fs.writeFileSync(
      path.join(claimableDataDir, `${protocolName}.json`),
      JSON.stringify(jsonRes, null, 2)
    );
  }
}

main();
