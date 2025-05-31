import ToDoCard from "@/components/project/task/ToDoCard";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiRightArrowCircle } from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";
import { LuListMinus } from "react-icons/lu";
import { HeaderTitle, TaskContainer, TaskHeader, TaskItem } from "./style";
import { TodoType } from "@/types/todo";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetTodoList } from "@/query/todo/useGetTodoList";
import { updateTodo, updateTodoStatus } from "@/apis/todo/todo";

const Task = () => {
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const { data } = useGetTodoList(parsedProjectId);
  const [tasks, setTasks] = useState<TodoType[]>([]);

  useEffect(() => {
    setTasks(data ?? []);
  }, [data]);

  const updateTodoHandler = useCallback(
    async (todoId: number, updated: Partial<TodoType>) => {
      setTasks((prev) =>
        prev.map((t) => (t.todoId === todoId ? { ...t, ...updated } : t))
      );

      if (updated.status !== undefined) {
        await updateTodoStatus({ todoId, status: updated.status });
      } else {
        await updateTodo({ todoId, ...updated });
      }
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
          <ToDoCard task={todo} onUpdate={updateTodoHandler} />
        </TaskItem>
      ))}
    </TaskContainer>
  );
};

export default Task;
