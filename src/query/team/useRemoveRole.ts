import { removeRole } from "@/apis/team/team";
import { useMutation } from "@tanstack/react-query";

export const useRemoveRole = () => {
  return useMutation({
    mutationFn: ({
      projectId,
      roleId,
    }: {
      projectId: number;
      roleId: number;
    }) => removeRole(projectId, roleId),
    onSuccess: (res) => {
      console.log("역할 삭제 성공:", res);
    },
    onError: (err) => {
      console.error("역할 삭제 실패:", err);
    },
  });
};
