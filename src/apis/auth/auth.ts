import { LoginRequest, LoginResponse, SignUpRequest } from "@/types/auth";
import publicInstance from "../publicInstance";
import instance from "../axiosInstance";
import { AxiosResponse } from "axios";

// 로그인
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await publicInstance.post("/user/signIn", data);
  console.log(res.data.data);
  return res.data.data;
};

// 회원가입
export const signUp = (data: SignUpRequest) => {
  return publicInstance.post("/user/signup", data);
};

// 이메일 인증 요청
export const requestEmailCode = (email: string) => {
  return publicInstance.post("/user/email", { email });
};

// 이메일 인증 확인
export const checkEmailCode = ({
  email,
  checkCode,
}: {
  email: string;
  checkCode: string;
}): Promise<AxiosResponse<{ responseCode: number; message?: string }>> => {
  return publicInstance.post("/user/email/check", { email, checkCode });
};

// 토큰 재발급 (임시)
export const reissueToken = async (userId: number) => {
  const response = await publicInstance.post("/user/reissue", { userId });
  return response.data.data;
};

// 회원 정보 요청
export const getUserProfile = async () => {
  const res = await instance.post("/user/profile");
  return res.data.data;
};

// 회원 정보 수정
export const editUserProfile = (data: FormData) => {
  return instance.put("/user/profile/edit", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// 회원 탈퇴
export const withdrawUser = () => {
  return instance.put("/user/withdraw");
};
