import { store } from "@/store/store";
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = store.getState().auth;
  if (token.accessToken && config.headers) {
    config.headers.Authorization = `${token.accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      // 추후 자동 토큰 재발급 로직 추가 예정.
      window.location.href = "/auth";
    }
    return Promise.reject(err);
  }
);

export default instance;
