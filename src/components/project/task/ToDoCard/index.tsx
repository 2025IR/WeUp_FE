import IconLabel from "@/components/common/IconLabel";
import Label from "@/components/common/Label";
import {
  BiCheckbox,
  BiCheckboxMinus,
  BiSolidCheckboxChecked,
} from "react-icons/bi";
import {
  AssigneeWrapper,
  CheckWrapper,
  DateWrapper,
  StatusWrapper,
  SummaryWrapper,
} from "./style";
import { TodoType } from "@/types/todo";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type Props = {
  task: TodoType;
  onUpdate: (todoId: number, updated: Partial<TodoType>) => void;
};

const ToDoCard = ({ task, onUpdate }: Props) => {
  const [status, setStatus] = useState(task.status);

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.todoName);

  const handleStatusChange = (newStatus: number) => {
    setStatus(newStatus);
    onUpdate(task.todoId, { status: newStatus });
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    if (inputValue !== task.todoName) {
      onUpdate(task.todoId, { todoName: inputValue });
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      (e.currentTarget as HTMLInputElement).blur();
    }
  };

  return (
    <>
      <CheckWrapper isGreen={status === 2}>
        {status === 0 ? (
          <BiCheckbox onClick={() => handleStatusChange(1)} />
        ) : status === 1 ? (
          <BiCheckboxMinus onClick={() => handleStatusChange(2)} />
        ) : (
          <BiSolidCheckboxChecked onClick={() => handleStatusChange(0)} />
        )}
      </CheckWrapper>
      <SummaryWrapper onClick={() => setIsEditing(true)}>
        {isEditing ? (
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            autoFocus
            className="w-full bg-transparent outline-none"
          />
        ) : (
          <p>{task.todoName}</p>
        )}
      </SummaryWrapper>
      <StatusWrapper>
        {status === 0 ? (
          <Label
            colors="secondary"
            textColors="text"
            onClick={() => handleStatusChange(1)}
          >
            시작 전
          </Label>
        ) : status === 1 ? (
          <Label
            colors="blue"
            textColors="textWhite"
            onClick={() => handleStatusChange(2)}
          >
            진행 중
          </Label>
        ) : (
          <Label onClick={() => handleStatusChange(0)}>완료</Label>
        )}
      </StatusWrapper>
      <AssigneeWrapper>
        <IconLabel
          fontSize="body"
          colors="text"
          size="lg"
          full
          type="image"
          icon="https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png"
        >
          정윤석
        </IconLabel>
      </AssigneeWrapper>
      <DateWrapper>
        <Label colors="secondary" textColors="text">
          {task.startDate}
        </Label>
      </DateWrapper>
    </>
  );
};

export default ToDoCard;
