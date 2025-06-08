import { editRole } from "@/apis/team/team";
import { useMutation } from "@tanstack/react-query";

export const useEditRole = () => {
  return useMutation({
    mutationFn: ({
      projectId,
      roleId,
      roleName,
      roleColor,
    }: {
      projectId: number;
      roleId: number;
      roleName: string;
      roleColor: string;
    }) => editRole(projectId, roleId, roleName, roleColor),
    onSuccess: (res) => {
      console.log("역할 수정 성공:", res);
    },
    onError: (err) => {
      console.error("역할 수정 실패:", err);
    },
  });
};
