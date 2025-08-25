import { requestEmailCode } from "@/apis/auth/auth";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

export const useRequestEmailCode = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: requestEmailCode,
    onSuccess: () => {
      dispatch(
        setApiMessage({
          message: "인증 코드가 전송되었습니다",
          type: "success",
        })
      );
    },
    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "",
          type: "error",
        })
      );
    },
  });
};
