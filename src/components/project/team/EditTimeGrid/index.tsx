import { useState } from "react";
import { GridContainer, TimeDiv } from "./style";

type Props = {
  initialEditString: string;
  onEditChange: (newString: string) => void;
};

const EditTimeGrid = ({ initialEditString, onEditChange }: Props) => {
  const [editString, setEditString] = useState(initialEditString);
  const [isDragging, setIsDragging] = useState(false);
  const [dragTarget, setDragTarget] = useState<"1" | "0" | null>(null);

  const handleMouseDown = (i: number) => {
    const current = editString[i];
    const target = current === "1" ? "0" : "1";
    setIsDragging(true);
    setDragTarget(target);

    updateAtIndex(i, target);
  };

  const handleMouseEnter = (i: number) => {
    if (!isDragging || dragTarget === null) return;
    updateAtIndex(i, dragTarget);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragTarget(null);
  };

  const updateAtIndex = (i: number, value: "1" | "0") => {
    const arr = [...editString];
    arr[i] = value;
    const newString = arr.join("");
    setEditString(newString);
    onEditChange(newString); // 부모에 알림
  };

  return (
    <GridContainer>
      {Array.from(editString).map((value, i) => {
        const row = Math.floor(i / 7);
        const totalRows = editString.length / 7;
        const isBottomHighlight = row % 2 === 1 && row !== totalRows - 1;

        return (
          <TimeDiv
            key={i}
            opacity={Number(value)}
            isBottomHighlight={isBottomHighlight}
            onMouseDown={(e) => {
              e.preventDefault();
              handleMouseDown(i);
            }}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseUp={handleMouseUp}
          >
            <div />
          </TimeDiv>
        );
      })}
    </GridContainer>
  );
};

export default EditTimeGrid;
