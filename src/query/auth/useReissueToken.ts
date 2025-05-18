import { reissueToken } from "@/apis/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useReissueToken = () => {
  return useMutation({
    mutationFn: reissueToken,
    onSuccess: (res) => {
      const accessToken = res.accessToken;

      console.log("토큰이 갱신되었습니다.", accessToken);
    },
    onError: (err) => {
      console.log("토큰 재발급 실패");
      console.error(err);
    },
  });
};
