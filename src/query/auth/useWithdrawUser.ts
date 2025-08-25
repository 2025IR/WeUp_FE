import { withdrawUser } from "@/apis/auth/auth";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

export const useWithdrawUser = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: withdrawUser,
    onSuccess: () => {
      dispatch(setApiMessage({ message: "회원 탈퇴 성공", type: "success" }));
    },
    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "회원 탈퇴 실패",
          type: "error",
        })
      );
    },
  });
};
