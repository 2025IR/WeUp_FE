import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiCheck, BiEditAlt } from "react-icons/bi";
import {
  Background,
  Container,
  Header,
  HeaderButton,
  HeaderMenu,
  Main,
  TimeTable,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEditSchedule } from "@/query/schedule/useEditSchedule";
import ScheduleMain from "../ScheduleMain";
import { changeScedule } from "@/store/schedule";

type Type = {
  onClose: () => void;
  projectId: number;
};

const ScheduleModal = ({ onClose, projectId }: Type) => {
  const dispatch = useDispatch();

  const [isEditMode, setIsEditMode] = useState(false);
  const { mutate: editScheduleMutate } = useEditSchedule(projectId);
  const myMemberId = useSelector((state: RootState) => state.project.memberId);

  const mySchedule = useSelector(
    (state: RootState) => state.schedule.tempMySchedule
  );

  const handleEdit = () => {
    dispatch(
      changeScedule({
        memberId: myMemberId,
        availableTime: mySchedule,
      })
    );
    editScheduleMutate({
      availableTime: mySchedule,
    });
    setIsEditMode(false);
  };

  return (
    <Background>
      <Container>
        <Header>
          <div />
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
          <HeaderMenu>
            {isEditMode ? (
              <>
                <HeaderButton onClick={handleEdit}>
                  <BiCheck />
                </HeaderButton>
                <HeaderButton onClick={() => setIsEditMode(false)}>
                  <AiOutlineClose />
                </HeaderButton>
              </>
            ) : (
              <>
                <HeaderButton onClick={() => setIsEditMode(true)}>
                  <BiEditAlt />
                </HeaderButton>
                <HeaderButton onClick={onClose}>
                  <AiOutlineClose />
                </HeaderButton>
              </>
            )}
          </HeaderMenu>
        </Header>
        <Main>
          <TimeTable>
            <div>
              <span>09:00</span>
            </div>
            <div>
              <span>10:00</span>
            </div>
            <div>
              <span>11:00</span>
            </div>
            <div>
              <span>12:00</span>
            </div>
            <div>
              <span>13:00</span>
            </div>
            <div>
              <span>14:00</span>
            </div>
            <div>
              <span>15:00</span>
            </div>
            <div>
              <span>16:00</span>
            </div>
            <div>
              <span>17:00</span>
            </div>
            <div>
              <span>18:00</span>
            </div>
            <div>
              <span>19:00</span>
            </div>
            <div>
              <span>20:00</span>
            </div>
            <div>
              <span>21:00</span>
            </div>
            <div>
              <span>22:00</span>
            </div>
            <div>
              <span>23:00</span>
            </div>
            <div>
              <span>00:00</span>
            </div>
            <div>
              <span>01:00</span>
            </div>
          </TimeTable>
          <ScheduleMain isEditMode={isEditMode} projectId={projectId} />
        </Main>
      </Container>
    </Background>
  );
};

export default ScheduleModal;
