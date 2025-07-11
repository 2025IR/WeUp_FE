import { store } from "@/store/store";
import axios from "axios";
import { refreshAndRetry } from "./refreshAndRetry";

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
  async (err) => {
    // 이전 요청 정보 담긴 객체
    const originalRequest = err.config;

    // 무한 루프 방지 위해 _retry 추가
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshAndRetry(originalRequest);
    }

    return Promise.reject(err);
  }
);

export default instance;
