import { getMeetingCount } from "@/apis/webRtc/webRtc";
import { useQuery } from "@tanstack/react-query";

export const useMeetingCount = (project_id: number) => {
  return useQuery({
    queryKey: ["meetingCount", project_id],
    queryFn: () => getMeetingCount(project_id),
    enabled: !!project_id,
  });
};
