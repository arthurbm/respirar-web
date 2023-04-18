/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";
import { destroyCookie, parseCookies } from "nookies";

const httpClient = axios.create({
  baseURL: "http://localhost:3001/",
});

httpClient.interceptors.request.use((config) => {
  const { accessToken } = parseCookies();
  if (config.headers && accessToken) {
    config.headers.Authorization = `Token ${accessToken}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      destroyCookie(undefined, "access_token");
      setTimeout(() => {
        window.location.replace("/login");
      }, 600);
    }

    return Promise.reject(error);
  }
);

export default httpClient;
