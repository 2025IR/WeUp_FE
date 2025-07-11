import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { clearAuth } from "@/store/auth";
import { logout } from "@/apis/auth/auth";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      dispatch(clearAuth());
      console.log("로그아웃 성공");
      navigate("/auth");
    },
    onError: (err) => {
      console.error("로그아웃 실패", err);
    },
  });
};
