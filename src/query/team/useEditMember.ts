import { assignMemberRole } from "@/apis/team/team";
import { useMutation } from "@tanstack/react-query";

export const useEditMember = () => {
  return useMutation({
    mutationFn: ({
      projectId,
      memberId,
      roleIds,
    }: {
      projectId: number;
      memberId: number;
      roleIds: number[];
    }) => assignMemberRole(projectId, memberId, roleIds),
    onSuccess: (res) => {
      console.log("팀원 역할 수정 성공:", res);
    },
    onError: (err) => {
      console.error("팀원 역할 수정 실패:", err);
    },
  });
};
