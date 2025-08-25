import { checkEmailCode } from "@/apis/auth/auth";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

export const useCheckEmailCode = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: checkEmailCode,
    onSuccess: () => {
      dispatch(
        setApiMessage({
          message: "이메일 인증 성공",
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
