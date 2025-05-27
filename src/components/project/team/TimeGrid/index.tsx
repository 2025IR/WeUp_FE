import { useState } from "react";
import { GridContainer, TimeDiv } from "./style";
import { getAverageTimeArray } from "@/utils/getAverageTimeArray";

type Props = {
  averageTimeArray: number[];
};

const TimeGrid = ({ averageTimeArray }: Props) => {
  const [timeSlots, setTimeSlots] = useState<boolean[]>(Array(252).fill(false));

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
          />
        );
      })}
    </GridContainer>
  );
};

export default TimeGrid;
