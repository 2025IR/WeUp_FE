import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { CalendarWrapper } from "./style";

const DateModal = () => {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

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
