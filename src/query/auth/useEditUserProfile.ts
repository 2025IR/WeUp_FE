import { editUserProfile } from "@/apis/auth/auth";
import { useMutation } from "@tanstack/react-query";

export const useEditUserProfile = () => {
  return useMutation({
    mutationFn: editUserProfile,
    onSuccess: () => {
      console.log("프로필이 수정되었습니다.");
    },
    onError: () => {
      console.log("프로필 수정 실패");
    },
  });
};
