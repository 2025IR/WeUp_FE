import { editUserProfile } from "@/apis/auth/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useEditUserProfile = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: AxiosError<{ message: string }>) => void;
}) => {
  return useMutation({
    mutationFn: ({ data }: { data: FormData }) => editUserProfile(data),
    onSuccess,
    onError,
  });
};
