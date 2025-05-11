import { enterMeeting } from "@/apis/webRtc/webRtc";
import { useMutation } from "@tanstack/react-query";

export const useEnterMeeting = () => {
  return useMutation({
    mutationFn: (project_id: number) => enterMeeting(project_id),
  });
};
