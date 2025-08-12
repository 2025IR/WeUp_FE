import { ScheduleType } from "@/types/schedule";
import { useScheduleStats } from "@/utils/useScheduleStats";
import ViewTimeGrid from "../ViewTimeGrid";
import ViewSideSection from "../ViewSideSection";
import { useMemo, useState } from "react";

type Type = {
  scheduleData: ScheduleType[] | undefined;
};

const ViewSchedule = ({ scheduleData }: Type) => {
  // 선택 해제한 인원 상태 관리
  const [unselectedMember, setUnselectedMember] = useState<number[]>([]);
  // 선택된 인원 데이터 필터링
  const filteredScheduleData = useMemo(() => {
    return scheduleData?.filter(
      (item) => !unselectedMember.includes(item.memberId)
    );
  }, [scheduleData, unselectedMember]);

  // 일정 통계 데이터 생성
  const statScheduleData = useScheduleStats(filteredScheduleData);

  const [hoveredMember, setHoveredMember] = useState<number[]>([]);

  return (
    <>
      <ViewTimeGrid
        statScheduleData={statScheduleData}
        updateHovered={setHoveredMember}
      />
      <ViewSideSection
        unselected={unselectedMember}
        hovered={hoveredMember}
        updateUnselected={setUnselectedMember}
      />
    </>
  );
};

export default ViewSchedule;
