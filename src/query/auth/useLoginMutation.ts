import { login } from "@/apis/auth/auth";
import { LoginRequest, LoginResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useLoginMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: AxiosError<{ message: string }>) => void;
}) => {
  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess,
    onError,
  });
};
