import { createRole } from "@/apis/team/team";
import { useMutation } from "@tanstack/react-query";

export const useCreateRole = () => {
  return useMutation({
    mutationFn: ({
      projectId,
      roleName,
      roleColor,
    }: {
      projectId: number;
      roleName: string;
      roleColor: string;
    }) => createRole(projectId, roleName, roleColor),
    onSuccess: (res) => {
      console.log("역할 추가 성공:", res);
    },
    onError: (err) => {
      console.error("역할 추가 실패:", err);
    },
  });
};
