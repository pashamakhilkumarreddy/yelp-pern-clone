import constants from "./constants";

const config = {
  API_URL: "http://localhost:5000",
  ENV: process.env.NODE_ENV || "development",
  ...constants,
};

export default config;
