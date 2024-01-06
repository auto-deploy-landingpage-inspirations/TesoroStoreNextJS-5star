import axios from "axios";
import { getToken } from "./get-token";

const baseURL:string = 'https://tesoro-backend.onrender.com';

const https = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
https.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



export default https;
