import { useEffect, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CalendarWrapper } from "./style";
import { TodoType, TodoUpdateType } from "@/types/todo";
import { formatTodoDate } from "@/utils/formatTime";

type Props = {
  task: TodoType;
  onUpdate: (todoId: number, updated: Partial<TodoUpdateType>) => void;
};

const DateModal = ({ task, onUpdate }: Props) => {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  useEffect(() => {
    setRange({
      from: new Date(task.startDate),
      to: task.endDate ? new Date(task.endDate) : undefined,
    });
  }, [task]);

  useEffect(() => {
    if (range?.from) {
      const isSameDate =
        range.to && range.from.toDateString() === range.to.toDateString();
      onUpdate(task.todoId, {
        startDate: formatTodoDate(range.from),
        endDate: isSameDate || !range.to ? undefined : formatTodoDate(range.to),
      });
    }
  }, [range]);

  return (
    <CalendarWrapper>
      <DayPicker
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={1}
      />
    </CalendarWrapper>
  );
};

export default DateModal;
