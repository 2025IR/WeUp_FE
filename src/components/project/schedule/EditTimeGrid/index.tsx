import { useRef, useState, MouseEvent } from "react";
import { GridContainer } from "./style";
import { useDispatch } from "react-redux";
import { setMySchedule } from "@/store/schedule";
import EditTimeDiv from "../EditTimeDiv";

type Props = { myAvailableTime: string };

const EditTimeGrid = ({ myAvailableTime }: Props) => {
  const dispatch = useDispatch();
  const [editString, setEditString] = useState(myAvailableTime);

  const isDraggingRef = useRef(false);
  const dragTargetRef = useRef<"1" | "0" | null>(null);

  // index 위치의 값을 변경
  const updateAtIndex = (i: number, value: "1" | "0") => {
    setEditString((prev) => {
      if (prev[i] === value) return prev;
      const arr = [...prev];
      arr[i] = value;
      return arr.join("");
    });
  };

  // 선택된 div의 index를 찾아서 반환
  const getIndexFromEvent = (e: MouseEvent) => {
    const el = e.target as HTMLDivElement;
    if (!el) return null;
    console.log(el.dataset);
    return Number(el.dataset.index);
  };

  // 마우스 눌렀을 때 상태관리 반영
  const handleMouseDown = (e: MouseEvent) => {
    const i = getIndexFromEvent(e);
    if (i == null) return;

    const target: "1" | "0" = editString[i] === "1" ? "0" : "1";
    isDraggingRef.current = true;
    dragTargetRef.current = target;

    updateAtIndex(i, target);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || dragTargetRef.current == null) return;
    const i = getIndexFromEvent(e);
    if (i == null) return;
    updateAtIndex(i, dragTargetRef.current);
  };

  const commitAndReset = () => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    dragTargetRef.current = null;

    dispatch(setMySchedule(editString));
  };

  return (
    <GridContainer
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={commitAndReset}
      onMouseLeave={commitAndReset}
    >
      {Array.from(editString).map((value, i) => {
        const row = Math.floor(i / 7);
        const isBottomHighlight = row % 2 === 1 && row !== 36 - 1;
        return (
          <EditTimeDiv
            key={i}
            index={i}
            value={value}
            isBottomHighlight={isBottomHighlight}
          />
        );
      })}
    </GridContainer>
  );
};

export default EditTimeGrid;
