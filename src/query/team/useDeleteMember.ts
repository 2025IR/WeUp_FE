import { deleteMember } from "@/apis/team/team";
import { useMutation } from "@tanstack/react-query";

export const useDeleteMember = () => {
  return useMutation({
    mutationFn: ({
      project_id,
      member_id,
    }: {
      project_id: number;
      member_id: number;
    }) => deleteMember(project_id, member_id),
    onSuccess: (res) => {
      console.log("팀원 삭제 성공:", res);
    },
    onError: (err) => {
      console.error("팀원 삭제 실패:", err);
    },
  });
};
