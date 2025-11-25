import { delegateLeader } from "@/apis/team/team";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
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
      const axiosError = err as AxiosError<{ message: string }>;

      dispatch(
        setApiMessage({
          message: axiosError.response?.data.message ?? "팀장 위임 실패",
          type: "error",
        })
      );
    },
  });
};
