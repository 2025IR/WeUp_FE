import { ScheduleStatType, ScheduleType } from "@/types/schedule";
import { useMemo } from "react";

export const useScheduleStats = (
  scheduleData: ScheduleType[] | undefined
): ScheduleStatType[] => {
  return useMemo(() => {
    if (!scheduleData || scheduleData.length === 0) return [];

    const length = 252; // 7(일주일) * 18(오전 8시 ~ 오전 2시) * 2(30분 단위) = 252
    const memberCount = scheduleData.length;
    const result: ScheduleStatType[] = [];

    for (let i = 0; i < length; i++) {
      let total = 0;
      const ids: number[] = [];
      scheduleData.forEach(({ memberId, availableTime }) => {
        if (availableTime[i] === "1") {
          total++;
          ids.push(memberId);
        }
      });
      result.push({ opacity: total / memberCount, id: ids });
    }

    return result;
  }, [scheduleData]);
};
