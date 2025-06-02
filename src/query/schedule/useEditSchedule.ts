import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSchedule } from "@/apis/schedule/schedule";

export const useEditSchedule = (projectId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      projectId,
      availableTime,
    }: {
      projectId: number;
      availableTime: string;
    }) => editSchedule(projectId, availableTime),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["teamSchedule", projectId] });
    },
  });
};
