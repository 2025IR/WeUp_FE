import { reissueToken } from "@/apis/auth/auth";
import { clearAuth, setAuth } from "@/store/auth";
import { store } from "@/store/store";
import axios, { InternalAxiosRequestConfig } from "axios";

type QueueItem = {
  originalRequest: InternalAxiosRequestConfig;
  resolve: (value: any) => void;
  reject: (reason?: any) => void;
};

let isRefreshing = false;
let queue: QueueItem[] = [];

export const refreshAndRetry = async (
  originalRequest: InternalAxiosRequestConfig
) => {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      queue.push({ originalRequest, resolve, reject });
    });
  }

  isRefreshing = true;

  try {
    const res = await reissueToken();

    // 토큰 Redux에 저장
    store.dispatch(setAuth(res));

    // 헤더 세팅
    originalRequest.headers["Authorization"] = `${res.accessToken}`;

    queue.forEach(({ originalRequest, resolve, reject }) => {
      originalRequest.headers["Authorization"] = `${res.accessToken}`;

      axios(originalRequest).then(resolve).catch(reject);
    });

    queue = [];

    return axios(originalRequest);
  } catch (error) {
    console.error("토큰 재발급 실패:", error);
    store.dispatch(clearAuth());
    window.location.href = "/auth";
    return Promise.reject(error);
  } finally {
    isRefreshing = false;
  }
};
