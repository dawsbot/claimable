import Joi from "@hapi/joi";
const path = require("path");
const fs = require("fs");
const envFilePath = path.join(__dirname, "../.env");
const sampleEnvFilePath = path.join(__dirname, "../.env.sample");
const dotenv = require("dotenv");

const schema = Joi.object({
  GA_TRACKING_ID: Joi.string().required(),
  INFURA_RPC_MAINNET: Joi.string().required(),
});

// validate production env
let processEnv = process.env;
if (fs.existsSync(envFilePath)) {
  processEnv = dotenv.parse(fs.readFileSync(envFilePath));
}

const res = schema.validate(processEnv);
if (res.error) {
  throw new Error(`Invalid ".env" file: ${res.error.message}`);
}

// validate sample env
const sampleProcessEnv = dotenv.parse(fs.readFileSync(sampleEnvFilePath));

const sampleRes = schema.validate(sampleProcessEnv);
if (sampleRes.error) {
  throw new Error(`Invalid SAMPLE.env: ${sampleRes.error.message}`);
}
