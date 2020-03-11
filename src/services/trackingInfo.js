import axios from "axios";
import dotenv from "dotenv";

import { BaseUrl } from "./config.json";

dotenv.config();
const APIKEY = process.env.API_KEY || "KKbfvslE3qKJn3WRyUeI3g";

const apiEndPoint = `${BaseUrl}/api/v1/trackingInfo`;

export async function findTracking(code, invoice) {
  const result = await axios.get(
    `${apiEndPoint}?t_key=${APIKEY}&t_code=${code}&t_invoice=${invoice}`
  );
  return result;
}
