import { delegateLeader } from "@/apis/team/team";
import { useMutation } from "@tanstack/react-query";

type DelegateParams = {
  projectId: number;
  newLeaderId: number;
};

export const useDelegateLeader = () => {
  return useMutation({
    mutationFn: ({ projectId, newLeaderId }: DelegateParams) =>
      delegateLeader(projectId, newLeaderId),
  });
};
