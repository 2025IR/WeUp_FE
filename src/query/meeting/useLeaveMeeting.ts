import { leaveMeeting } from "@/apis/webRtc/webRtc";
import { useMutation } from "@tanstack/react-query";

export const useLeaveMeeting = () => {
  return useMutation({
    mutationFn: (project_id: number) => leaveMeeting(project_id),
  });
};
