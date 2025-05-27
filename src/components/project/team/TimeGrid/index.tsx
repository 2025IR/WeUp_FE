import { useState } from "react";
import { GridContainer, TimeDiv } from "./style";

const TimeGrid = () => {
  const [timeSlots, setTimeSlots] = useState<boolean[]>(Array(252).fill(false));

  return (
    <GridContainer>
      {timeSlots.map((_, i) => {
        const row = Math.floor(i / 7);
        const totalRows = timeSlots.length / 7;
        const isBottomHighlight = row % 2 === 1 && row !== totalRows - 1;

        return <TimeDiv key={i} isBottomHighlight={isBottomHighlight} />;
      })}
    </GridContainer>
  );
};

export default TimeGrid;
