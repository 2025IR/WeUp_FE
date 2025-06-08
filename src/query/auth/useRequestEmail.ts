import { requestEmailCode } from "@/apis/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useRequestEmailCode = () => {
  return useMutation({
    mutationFn: requestEmailCode,
    onSuccess: (res) => {
      console.log("인증 코드가 전송되었습니다!", res);
    },
    onError: (err) => {
      console.error("이메일 전송 실패", err);
    },
  });
};
