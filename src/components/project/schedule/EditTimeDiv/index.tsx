import { memo } from "react";
import { TimeDiv } from "./style";

type Props = {
  index: number;
  value: string;
  isBottomHighlight: boolean;
};

const EditTimeDiv = ({ index, value, isBottomHighlight }: Props) => {
  return (
    <TimeDiv opacity={Number(value)} isBottomHighlight={isBottomHighlight}>
      <div data-index={index} />
    </TimeDiv>
  );
};

export default memo(EditTimeDiv);
