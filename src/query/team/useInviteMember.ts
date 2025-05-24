import { inviteMember } from "@/apis/team/team";
import { useMutation } from "@tanstack/react-query";

export const useInviteMember = () => {
  return useMutation({
    mutationFn: ({ projectId, email }: { projectId: number; email: string }) =>
      inviteMember(projectId, email),
    onSuccess: (res) => {
      console.log("초대 성공", res);
    },
    onError: (err) => {
      console.error("초대 실패", err);
    },
  });
};
