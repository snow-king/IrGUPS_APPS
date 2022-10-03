
import axios from "axios";


export const openApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL_DEV,
  timeout: 30000,
  headers: { "Access-Control-Allow-Origin": "*" },
});
