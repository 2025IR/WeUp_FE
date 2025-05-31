import ToDoCard from "@/components/project/task/ToDoCard";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiRightArrowCircle } from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";
import { LuListMinus } from "react-icons/lu";
import { HeaderTitle, TaskContainer, TaskHeader, TaskItem } from "./style";
import { TodoType } from "@/types/todo";
import { useCallback, useState } from "react";

export const dummyTodos: TodoType[] = [
  {
    todoId: 1,
    todoName: "챕터 1~3 자료 조사 및 정리하기",
    startDate: "2025-06-01",
    endDate: "2025-06-03",
    status: 2,
    isMyTodo: true,
    assignee: [
      {
        memberId: 101,
        name: "정윤석",
        profileImage:
          "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
      },
    ],
  },
  {
    todoId: 2,
    todoName: "디자인 시안 검토 및 수정",
    startDate: "2025-06-02",
    endDate: "2025-06-05",
    status: 1,
    isMyTodo: false,
    assignee: [
      {
        memberId: 102,
        name: "김지현",
        profileImage:
          "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley2.png",
      },
      {
        memberId: 103,
        name: "이도현",
        profileImage:
          "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley3.png",
      },
    ],
  },
  {
    todoId: 3,
    todoName: "API 명세서 작성",
    startDate: "2025-06-04",
    endDate: "2025-06-06",
    status: 0,
    isMyTodo: true,
    assignee: [
      {
        memberId: 104,
        name: "박수진",
        profileImage:
          "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley4.png",
      },
    ],
  },
];

const Task = () => {
  const [tasks, setTasks] = useState<TodoType[]>(dummyTodos);

  const updateTodoHandler = useCallback(
    async (todoId: number, updated: Partial<TodoType>) => {
      setTasks((prev) =>
        prev.map((t) => (t.todoId === todoId ? { ...t, ...updated } : t))
      );
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
