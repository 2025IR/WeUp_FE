import {
  EditProfileRequest,
  LoginRequest,
  LoginResponse,
  SignUpRequest,
} from "@/types/auth";
import publicInstance from "../publicInstance";
import instance from "../axiosInstance";

// 로그인
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await publicInstance.post("/user/signIn", data);
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
export const checkEmailCode = (checkcode: string) => {
  return publicInstance.post("/user/email/check", { checkcode });
};

// 토큰 재발급 (임시)
export const reissueToken = async (userId: number) => {
  const response = await publicInstance.post("/user/reissue", { userId });
  return response.data.data;
};

// 회원 정보 요청
export const getUserProfile = async () => {
  return instance.post("/user/profile");
};

// 회원 정보 수정
export const editUserProfile = (data: EditProfileRequest) => {
  return publicInstance.put("/user/profile/edit", data);
};

// 회원 탈퇴
export const withdrawUser = () => {
  return publicInstance.put("/user/withdraw");
};
