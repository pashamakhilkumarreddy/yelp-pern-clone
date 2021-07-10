import axios from "axios";
import config from "../config";

export default function API() {
  return axios.create({
    baseURL: config.baseURL,
    headers: {
      authorization: `Bearer {tokens.refreshToken}`,
    },
  });
}
