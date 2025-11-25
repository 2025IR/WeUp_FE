import { delegateLeader } from "@/apis/team/team";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

type DelegateParams = {
  projectId: number;
  newLeaderId: number;
};

export const useDelegateLeader = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: ({ projectId, newLeaderId }: DelegateParams) =>
      delegateLeader(projectId, newLeaderId),
    onSuccess: () => {
      dispatch(
        setApiMessage({
          message: "팀장 위임 성공",
          type: "success",
        })
      );
    },
    onError: (err) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "팀장 위임 실패",
          type: "error",
        })
      );
    },
  });
};
