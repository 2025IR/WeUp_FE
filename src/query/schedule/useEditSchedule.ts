import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSchedule } from "@/apis/schedule/schedule";

export const useEditSchedule = (projectId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      memberId,
      availableTime,
    }: {
      memberId: number;
      availableTime: string;
    }) => editSchedule(memberId, availableTime),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teamSchedule", projectId] });
    },
  });
};
