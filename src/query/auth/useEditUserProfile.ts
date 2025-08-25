import { editUserProfile } from "@/apis/auth/auth";
import { setApiMessage } from "@/store/alert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

export const useEditUserProfile = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ data }: { data: FormData }) => editUserProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      dispatch(setApiMessage({ message: "프로필 수정 성공", type: "success" }));
      onSuccess?.();
    },
    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "프로필 수정 실패",
          type: "error",
        })
      );
    },
  });
};
