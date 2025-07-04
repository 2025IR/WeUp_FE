import { deleteMember } from "@/apis/team/team";
import { useMutation } from "@tanstack/react-query";

type DeleteParams = {
  projectId: number;
  memberId: number;
};

export const useDeleteMember = () => {
  return useMutation({
    mutationFn: ({ projectId, memberId }: DeleteParams) =>
      deleteMember(projectId, memberId),
  });
};
