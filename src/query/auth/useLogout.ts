import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { clearAuth } from "@/store/auth";
import { logout } from "@/apis/auth/auth";
import { useNavigate } from "react-router-dom";
import { setApiMessage } from "@/store/alert";
import { AxiosError } from "axios";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      dispatch(clearAuth());
      dispatch(setApiMessage({ message: "로그아웃 성공", type: "success" }));
      navigate("/auth");
    },
    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "로그아웃 실패",
          type: "error",
        })
      );
    },
  });
};
