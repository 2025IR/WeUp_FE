import { GridContainer, TimeDiv } from "./style";

type Props = {
  averageTimeArray: number[];
  onHoverIndexChange: (index: number | null) => void;
};

const ViewTimeGrid = ({ onHoverIndexChange, averageTimeArray }: Props) => {
  return (
    <GridContainer>
      {Array.from({ length: 252 }).map((_, i) => {
        const row = Math.floor(i / 7);
        const totalRows = 252 / 7;
        const isBottomHighlight = row % 2 === 1 && row !== totalRows - 1;
        const opacity = averageTimeArray[i] ?? 0;

        return (
          <TimeDiv
            key={i}
            opacity={opacity}
            isBottomHighlight={isBottomHighlight}
            onMouseEnter={() => {
              onHoverIndexChange(i);
            }}
            onMouseLeave={() => {
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

export default ViewTimeGrid;
