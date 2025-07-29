import { reissueToken } from "@/apis/auth/auth";
import { clearAuth, setAuth } from "@/store/auth";
import { store } from "@/store/store";
import axios, { InternalAxiosRequestConfig } from "axios";

export const refreshAndRetry = async (
  originalRequest: InternalAxiosRequestConfig
) => {
  try {
    const res = await reissueToken();

    // 토큰 Redux에 저장
    store.dispatch(setAuth(res));

    // 재요청
    if (originalRequest.headers) {
      originalRequest.headers["Authorization"] = `${res.accessToken}`;
    }

    return axios(originalRequest);
  } catch (error) {
    console.error("토큰 재발급 실패:", error);
    store.dispatch(clearAuth());
    window.location.href = "/auth";
    return Promise.reject(error);
  }
};
