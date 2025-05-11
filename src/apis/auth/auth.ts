import { LoginRequest, LoginResponse } from "@/types/auth";
import publicInstance from "../publicInstance";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await publicInstance.post("/user/signIn", data);
  return res.data.data;
};
