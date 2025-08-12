import EditTimeGrid from "../EditTimeGrid";
import { SideSection, Highlight } from "./style";

type Type = {
  myAvailableTime: string;
};

const EditSchedule = ({ myAvailableTime }: Type) => {
  return (
    <>
      <EditTimeGrid myAvailableTime={myAvailableTime} />
      <SideSection>
        <p>
          <Highlight>선택한 시간</Highlight>이<br />
          다른 사용자에게도 <br />
          보여집니다
        </p>
        <p>
          <Highlight>가능한 시간</Highlight>을 <br />
          선택해주세요
        </p>
      </SideSection>
    </>
  );
};

export default EditSchedule;
