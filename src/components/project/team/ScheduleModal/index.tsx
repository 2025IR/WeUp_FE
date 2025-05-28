import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import { AiOutlineClose } from "react-icons/ai";
import { BiCheck, BiCheckSquare, BiEditAlt, BiSquare } from "react-icons/bi";
import {
  Background,
  Container,
  EmptyTable,
  Header,
  HeaderMenu,
  Main,
  TimeTable,
  UserTable,
  UserWrapper,
} from "./style";
import { getAverageTimeArray } from "@/utils/getAverageTimeArray";
import Label from "@/components/common/Label";
import ViewTimeGrid from "../ViewTimeGrid";
import EditTimeGrid from "../EditTimeGrid";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useParams } from "react-router-dom";
import { useGetSchedule } from "@/query/schedule/useGetSchedule";
import { useEditSchedule } from "@/query/schedule/useEditSchedule";

// const dummyAvailabilityList = [
//   {
//     memberId: 1,
//     name: "김철수",
//     availableTime: "1".repeat(10) + "0".repeat(242),
//   },
//   {
//     memberId: 2,
//     name: "이영희",
//     availableTime: "0".repeat(36) + "1".repeat(10) + "0".repeat(206),
//   },
//   {
//     memberId: 3,
//     name: "박민준",
//     availableTime: "1".repeat(252),
//   },
// ];

type Type = {
  onClose: () => void;
};

const ScheduleModal = ({ onClose }: Type) => {
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);

  const { data } = useGetSchedule(parsedProjectId);
  const availabilityList = Object.entries(data!).map(
    ([name, availableTime], idx) => ({
      memberId: idx + 1,
      name,
      availableTime,
    })
  );

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(
    new Set(availabilityList.map((m) => m.memberId))
  );
  console.log(data);

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) {
        copy.delete(id);
      } else {
        copy.add(id);
      }
      return new Set(copy);
    });
  };

  const selectedStrings = availabilityList
    .filter((m) => selectedIds.has(m.memberId))
    .map((m) => m.availableTime);

  const averageTimeArray =
    selectedStrings.length === 0
      ? Array(252).fill(0)
      : getAverageTimeArray(selectedStrings);

  const timeData = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "00:00",
    "01:00",
  ];

  const [isEditMode, setIsEditMode] = useState(false);
  const memberId = useSelector((state: RootState) => state.auth.userId);
  const [editedSchedule, setEditedSchedule] = useState<string | null>(null);
  const { mutate: editScheduleMutate } = useEditSchedule();

  useEffect(() => {
    const mySchedule = availabilityList.find(
      (m) => m.memberId === memberId
    )?.availableTime;
    if (mySchedule) {
      setEditedSchedule(mySchedule);
    }
  }, []);

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
                <Button
                  iconOnly
                  onClick={() => {
                    if (memberId && editedSchedule) {
                      editScheduleMutate({
                        memberId,
                        availableTime: editedSchedule,
                      });
                      setIsEditMode(false);
                    }
                  }}
                >
                  <BiCheck />
                </Button>
                <Button iconOnly onClick={() => setIsEditMode(false)}>
                  <AiOutlineClose />
                </Button>
              </>
            ) : (
              <>
                <Button iconOnly onClick={() => setIsEditMode(true)}>
                  <BiEditAlt />
                </Button>
                <Button iconOnly onClick={onClose}>
                  <AiOutlineClose />
                </Button>
              </>
            )}
          </HeaderMenu>
        </Header>
        <Main>
          <TimeTable>
            {timeData.map((time, idx) => (
              <div key={idx}>
                <span>{time}</span>
              </div>
            ))}
          </TimeTable>
          <div>
            {isEditMode ? (
              <EditTimeGrid initialEditString={editedSchedule ?? ""} />
            ) : (
              <ViewTimeGrid
                averageTimeArray={averageTimeArray}
                onHoverIndexChange={setHoveredIndex}
              />
            )}
          </div>
          {isEditMode ? (
            <EmptyTable />
          ) : (
            <UserTable>
              {availabilityList.map((member) => {
                const isSelected = selectedIds.has(member.memberId);
                const isHovered =
                  isSelected &&
                  hoveredIndex !== null &&
                  member.availableTime[hoveredIndex] === "1";

                return (
                  <UserWrapper
                    key={member.memberId}
                    onClick={() => toggleSelect(member.memberId)}
                  >
                    {isSelected ? <BiCheckSquare /> : <BiSquare />}
                    <Label
                      textColors={isHovered ? "textWhite" : "textLight"}
                      colors={isHovered ? "primary" : "background"}
                    >
                      {member.name}
                    </Label>
                  </UserWrapper>
                );
              })}
            </UserTable>
          )}
        </Main>
      </Container>
    </Background>
  );
};

export default ScheduleModal;
