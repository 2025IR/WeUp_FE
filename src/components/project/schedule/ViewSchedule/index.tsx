import { ScheduleType } from "@/types/schedule";
import { useScheduleStats } from "@/utils/useScheduleStats";
import ViewTimeGrid from "../ViewTimeGrid";
import ViewSideSection from "../ViewSideSection";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useStomp } from "@/contexts/StompContext";
import { changeScedule } from "@/store/schedule";

type Type = {
  scheduleData: ScheduleType[] | undefined;
  projectId: number;
};

const ViewSchedule = ({ scheduleData, projectId }: Type) => {
  // 웹소켓 구독 정보 변경
  const dispatch = useDispatch();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const { client, connSeq } = useStomp();
  useEffect(() => {
    if (!client || !client.connected) return;

    const subscription = client.subscribe(
      `/topic/schedule/${projectId}`,
      (message) => {
        const newMessage = JSON.parse(message.body);

        dispatch(
          changeScedule({
            memberId: newMessage.memberId,
            availableTime: newMessage.availableTime,
          })
        );

        console.log("📥 새 메시지 도착:", newMessage);
      },
      {
        Authorization: `${accessToken}`,
      }
    );

    return () => {
      subscription.unsubscribe({
        Authorization: `${accessToken}`,
      });
    };
  }, [client?.connected, projectId, connSeq]);

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
