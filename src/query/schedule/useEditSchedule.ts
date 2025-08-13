import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSchedule } from "@/apis/schedule/schedule";
import { useDispatch } from "react-redux";
import { setMySchedule } from "@/store/schedule";

export const useEditSchedule = (projectId: number) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: ({ availableTime }: { availableTime: string }) =>
      editSchedule(projectId, availableTime),
    onSuccess: (_data, variables) => {
      // db 저장 성공 시, 전역 상태 업데이트
      dispatch(setMySchedule(variables.availableTime));
      queryClient.invalidateQueries({ queryKey: ["teamSchedule", projectId] });
    },
  });
};
