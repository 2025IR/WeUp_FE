import { signUp } from "@/apis/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      console.log("회원가입 성공");
    },
    onError: (err) => {
      console.error("회원가입 실패", err);
    },
  });
};
