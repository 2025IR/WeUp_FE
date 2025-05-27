import Button from "@/components/common/Button";
import IconLabel from "@/components/common/IconLabel";
import { AiOutlineClose } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import {
  Background,
  Container,
  Header,
  HeaderMenu,
  Main,
  TimeTable,
} from "./style";
import TimeGrid from "../TimeGrid";

type Type = {
  onClose: () => void;
};

const ScheduleModal = ({ onClose }: Type) => {
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
            <Button iconOnly>
              <BiEditAlt />
            </Button>
            <Button variant="secondary" onClick={onClose}>
              <IconLabel
                fontSize="caption"
                fontWeight="bold"
                size="sm"
                gap="0.25rem"
                icon={<AiOutlineClose />}
              >
                Close
              </IconLabel>
            </Button>
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
            <TimeGrid />
          </div>
          <div>s</div>
        </Main>
      </Container>
    </Background>
  );
};

export default ScheduleModal;
