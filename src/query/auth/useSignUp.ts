import { signUp } from "@/apis/auth/auth";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export const useSignUp = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      dispatch(setApiMessage({ message: "회원가입 성공", type: "success" }));
    },
    onError: () => {
      dispatch(setApiMessage({ message: "회원가입 실패", type: "error" }));
    },
  });
};
