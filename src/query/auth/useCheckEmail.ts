import { checkEmailCode } from "@/apis/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useCheckEmailCode = () => {
  return useMutation({
    mutationFn: checkEmailCode,
    onSuccess: (res) => {
      if (res.data.responseCode === 200) {
        console.log("이메일 인증 완료!");
      } else {
        console.log(res.data.message || "인증 실패");
      }
    },
    onError: (err) => {
      console.log("서버 오류로 인증 실패");
      console.error(err);
    },
  });
};
