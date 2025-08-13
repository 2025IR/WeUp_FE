import { ScheduleStatType } from "@/types/schedule";
import { GridContainer, TimeDiv } from "./style";
import React from "react";

type Props = {
  statScheduleData: ScheduleStatType[];
  updateHovered: (ids: number[]) => void;
};

const ViewTimeGrid = ({ statScheduleData, updateHovered }: Props) => {
  return (
    <GridContainer>
      {Array.from({ length: 252 }).map((_, i) => {
        const row = Math.floor(i / 7);
        const totalRows = 252 / 7;
        const isBottomHighlight = row % 2 === 1 && row !== totalRows - 1;
        const opacity = statScheduleData[i]?.opacity ?? 0;
        return (
          <TimeDiv
            key={i}
            opacity={opacity}
            isBottomHighlight={isBottomHighlight}
            onMouseEnter={() => {
              updateHovered(statScheduleData[i]?.id ?? []);
            }}
            onMouseLeave={() => {
              updateHovered([]);
            }}
          >
            <div />
          </TimeDiv>
        );
      })}
    </GridContainer>
  );
};

export default React.memo(ViewTimeGrid);
