/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";

const isProd = process.env.NODE_ENV === "production";
const baseURL = isProd ? "https://respirar-server-node.onrender.com/" : "http://localhost:3001/";

const httpClient = axios.create({
  baseURL,
});

httpClient.interceptors.request.use((config) => {
  const { access_token } = parseCookies();
  if (config.headers && !config.headers?.Authorization && access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      destroyCookie(undefined, "access_token");
      destroyCookie(undefined, "g_token");
      setTimeout(() => {
        if (window.location.pathname !== "/login") {
          window.location.replace("/login");
        }
      }, 600);
    }

    return Promise.reject(error);
  }
);

export default httpClient;
