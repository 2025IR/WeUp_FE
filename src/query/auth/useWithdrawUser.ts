import { withdrawUser } from "@/apis/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useWithdrawUser = () => {
  return useMutation({
    mutationFn: withdrawUser,
    onSuccess: () => {
      alert("회원 탈퇴가 완료되었습니다.");
      console.log("회원 탈퇴가 완료되었습니다.");
    },
    onError: () => {
      console.log("회원 탈퇴에 실패했습니다.");
    },
  });
};
