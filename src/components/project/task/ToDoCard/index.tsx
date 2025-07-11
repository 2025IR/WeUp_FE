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
  DeleteWrapper,
  StatusWrapper,
  SummaryWrapper,
  TodoWrapper,
} from "./style";
import { TodoType } from "@/types/todo";
import { useEffect, useState } from "react";
import "react-day-picker/dist/style.css";
import { formatTodoDateOutput } from "@/utils/formatTime";
import { AiFillDelete } from "react-icons/ai";

type Props = {
  task: TodoType;
  onUpdate: (todoId: number, updated: Partial<TodoType>) => void;
  onOpenModal: (
    e: React.MouseEvent,
    type: "assignee" | "date",
    task: TodoType
  ) => void;
  onDelete: (todoId: number) => void;
};

const ToDoCard = ({ task, onUpdate, onOpenModal, onDelete }: Props) => {
  const [status, setStatus] = useState(task.status);

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task.todoName);

  useEffect(() => {
    setStatus(task.status);
    setInputValue(task.todoName);
  }, [task.status, task.todoName]);

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
    <TodoWrapper>
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
      <AssigneeWrapper onClick={(e) => onOpenModal(e, "assignee", task)}>
        {task.assignee.map((member) => (
          <IconLabel
            key={member.memberId}
            fontSize="body"
            colors="text"
            size="lg"
            full
            type="image"
            icon={member.profileImage}
            gap="0.5rem"
          >
            {member.name}
          </IconLabel>
        ))}
      </AssigneeWrapper>
      <DateWrapper onClick={(e) => onOpenModal(e, "date", task)}>
        <Label colors="secondary" textColors="text">
          {formatTodoDateOutput(task.startDate, task.endDate || undefined)}
        </Label>
      </DateWrapper>
      <DeleteWrapper>
        <AiFillDelete
          onClick={() => onDelete(task.todoId)}
          className="delete-wrapper"
        />
      </DeleteWrapper>
    </TodoWrapper>
  );
};

export default ToDoCard;
