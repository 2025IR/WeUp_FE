import { delegateLeader } from "@/apis/team/team";
import { useMutation } from "@tanstack/react-query";

export const useDelegateLeader = () => {
  return useMutation({
    mutationFn: ({
      project_id,
      member_id,
    }: {
      project_id: number;
      member_id: number;
    }) => delegateLeader(project_id, member_id),
    onSuccess: (res) => {
      console.log("팀장 위임 성공:", res);
    },
    onError: (err) => {
      console.error("팀장 위임 실패:", err);
    },
  });
};
