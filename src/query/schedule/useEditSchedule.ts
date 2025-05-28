import { useMutation } from "@tanstack/react-query";
import { editSchedule } from "@/apis/schedule/schedule";

export const useEditSchedule = () => {
  return useMutation({
    mutationFn: ({
      memberId,
      availableTime,
    }: {
      memberId: number;
      availableTime: string;
    }) => editSchedule(memberId, availableTime),
  });
};
