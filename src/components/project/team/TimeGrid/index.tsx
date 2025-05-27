import { useState } from "react";
import { GridContainer, TimeDiv } from "./style";
import { getAverageTimeArray } from "@/utils/getAverageTimeArray";

type Props = {
  averageTimeArray: number[];
  onHoverIndexChange: (index: number | null) => void;
};

const TimeGrid = ({ onHoverIndexChange, averageTimeArray }: Props) => {
  const [timeSlots, setTimeSlots] = useState<boolean[]>(Array(252).fill(false));
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <GridContainer>
      {timeSlots.map((_, i) => {
        const row = Math.floor(i / 7);
        const totalRows = timeSlots.length / 7;
        const isBottomHighlight = row % 2 === 1 && row !== totalRows - 1;
        const opacity = averageTimeArray[i] ?? 0;

        return (
          <TimeDiv
            key={i}
            opacity={opacity}
            isBottomHighlight={isBottomHighlight}
            onMouseEnter={() => {
              setHoverIndex(i);
              onHoverIndexChange(i);
            }}
            onMouseLeave={() => {
              setHoverIndex(null);
              onHoverIndexChange(null);
            }}
          >
            <div />
          </TimeDiv>
        );
      })}
    </GridContainer>
  );
};

export default TimeGrid;
