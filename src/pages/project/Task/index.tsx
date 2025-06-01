import ToDoCard from "@/components/project/task/ToDoCard";
import { AiOutlineCalendar, AiOutlinePlus } from "react-icons/ai";
import { BiRightArrowCircle } from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";
import { LuListMinus } from "react-icons/lu";
import {
  AddItem,
  HeaderTitle,
  ModalContainer,
  TaskContainer,
  TaskHeader,
  TaskItem,
} from "./style";
import { TodoType, TodoUpdateType } from "@/types/todo";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetTodoList } from "@/query/todo/useGetTodoList";
import { updateTodo, updateTodoStatus } from "@/apis/todo/todo";
import IconLabel from "@/components/common/IconLabel";
import { useCreateTodo } from "@/query/todo/useCreateTodo";
import { useContextMenuModal } from "@/hooks/useContextMenuModal";
import AssigneeModal from "@/components/project/task/AssigneeModal";
import DateModal from "@/components/project/task/DateModal";
import queryClient from "@/query/reactQueryClient";

const Task = () => {
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const { data } = useGetTodoList(parsedProjectId);
  const [tasks, setTasks] = useState<TodoType[]>([]);

  const { mutate: createTodo } = useCreateTodo();
  const { isOpen, modalRef, modalType, payload, modalPosition, openModal } =
    useContextMenuModal();

  const handleAddTodo = () => {
    createTodo(parsedProjectId);
  };

  const handleOpenModal = (
    e: React.MouseEvent,
    type: "assignee" | "date",
    task: TodoType
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    openModal(
      {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      },
      type,
      task
    );
  };

  useEffect(() => {
    setTasks(data ?? []);
  }, [data]);

  const updateTodoHandler = useCallback(
    async (todoId: number, updated: Partial<TodoUpdateType>) => {
      setTasks((prev) =>
        prev.map((t) => (t.todoId === todoId ? { ...t, ...updated } : t))
      );

      if (updated.status !== undefined) {
        await updateTodoStatus({ todoId, status: updated.status });
      } else {
        await updateTodo({ todoId, ...updated });
      }

      queryClient.invalidateQueries({
        queryKey: ["todoList", parsedProjectId],
      });
    },
    []
  );

  return (
    <TaskContainer>
      <TaskHeader>
        <div />
        <HeaderTitle>
          <LuListMinus />
          <p>Summary</p>
        </HeaderTitle>
        <HeaderTitle>
          <BiRightArrowCircle />
          <p>Status </p>
        </HeaderTitle>
        <HeaderTitle>
          <HiHashtag />
          <p>Assignee</p>
        </HeaderTitle>
        <HeaderTitle>
          <AiOutlineCalendar />
          <p>Date</p>
        </HeaderTitle>
      </TaskHeader>

      {tasks.map((todo) => (
        <TaskItem key={todo.todoId}>
          <ToDoCard
            task={todo}
            onUpdate={updateTodoHandler}
            onOpenModal={handleOpenModal}
          />
        </TaskItem>
      ))}

      <AddItem onClick={handleAddTodo}>
        <IconLabel fontSize="caption" size="sm" icon={<AiOutlinePlus />}>
          New To Do
        </IconLabel>
      </AddItem>

      {isOpen && payload && (
        <ModalContainer
          ref={modalRef}
          top={modalPosition.top}
          left={modalPosition.left}
        >
          {modalType === "assignee" && (
            <AssigneeModal
              projectId={parsedProjectId}
              task={payload}
              onUpdate={updateTodoHandler}
            />
          )}
          {modalType === "date" && <DateModal />}
        </ModalContainer>
      )}
    </TaskContainer>
  );
};

export default Task;
