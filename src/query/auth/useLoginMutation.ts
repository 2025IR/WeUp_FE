import { login } from "@/apis/auth/auth";
import { setApiMessage } from "@/store/alert";
import { setAuth } from "@/store/auth";
import { LoginRequest } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (res) => {
      dispatch(setAuth({ accessToken: res.accessToken, userId: res.userId }));
      dispatch(setApiMessage({ message: "로그인 성공", type: "success" }));
      navigate("/projects");
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
