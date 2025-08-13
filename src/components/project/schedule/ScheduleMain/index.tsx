import { useGetSchedule } from "@/query/schedule/useGetSchedule";
import EditSchedule from "../EditSchedule";
import ViewSchedule from "../ViewSchedule";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { setMySchedule, setSchedule } from "@/store/schedule";

type Type = {
  isEditMode: boolean;
  projectId: number;
};

const ScheduleMain = ({ isEditMode, projectId }: Type) => {
  const dispatch = useDispatch();
  // 프로젝트 일정 데이터 가져오기
  const { data: initialScheduleData } = useGetSchedule(projectId);
  // 전역 상태에서 가져오기
  const scheduleData = useSelector(
    (state: RootState) => state.schedule.schedule
  );

  // 프로젝트 일정 전역상태 관리
  useEffect(() => {
    if (initialScheduleData) dispatch(setSchedule(initialScheduleData));
  }, [initialScheduleData, dispatch]);

  // 내 멤버 ID 가져오기
  const myMemberId = useSelector((state: RootState) => state.project.memberId);
  // 프로젝트 일정 데이터에서 나의 일정 찾기
  const mySchedule = scheduleData?.find(
    (schedule) => schedule.memberId === myMemberId
  );
  // 전역상태에 자신의 스케줄 값 저장.
  useEffect(() => {
    if (mySchedule?.availableTime) {
      dispatch(setMySchedule(mySchedule.availableTime));
    }
  }, [mySchedule, dispatch]);

  return isEditMode ? (
    <EditSchedule
      myAvailableTime={mySchedule?.availableTime ?? "0".repeat(252)}
    />
  ) : (
    <ViewSchedule scheduleData={scheduleData} />
  );
};

export default ScheduleMain;
