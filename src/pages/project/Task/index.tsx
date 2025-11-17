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
} from "./style";
import { TodoType, TodoUpdateType } from "@/types/todo";
import { useCallback, useEffect, useState } from "react";
import { useGetTodoList } from "@/query/todo/useGetTodoList";
import { updateTodo, updateTodoStatus } from "@/apis/todo/todo";
import IconLabel from "@/components/common/IconLabel";
import { useCreateTodo } from "@/query/todo/useCreateTodo";
import { useContextMenuModal } from "@/hooks/useContextMenuModal";
import AssigneeModal from "@/components/project/task/AssigneeModal";
import DateModal from "@/components/project/task/DateModal";
import queryClient from "@/query/reactQueryClient";
import { useDeleteTodo } from "@/query/todo/useDeleteTodo";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useStomp } from "@/contexts/StompContext";

const Task = () => {
  const projectId = useSelector((state: RootState) => state.project.id);

  const { data } = useGetTodoList(projectId);
  const [tasks, setTasks] = useState<TodoType[]>([]);

  const { mutate: createTodo } = useCreateTodo();
  const { isOpen, modalRef, modalType, payload, modalPosition, openModal } =
    useContextMenuModal();

  const { mutate: deleteTodo } = useDeleteTodo();

  const handleAddTodo = () => {
    if (projectId) createTodo(projectId);
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

  const deleteTodoHandler = (todoId: number) => {
    setTasks((prev) => prev.filter((t) => t.todoId !== todoId));
    deleteTodo(todoId);
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
        queryClient.invalidateQueries({
          queryKey: ["todoList", projectId],
        });
      }
    },
    []
  );

  // 웹소켓 구독 정보 변경
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const memberId = useSelector((state: RootState) => state.project.memberId);
  const { client, connSeq } = useStomp();
  useEffect(() => {
    if (!client || !client.connected) return;

    const subscription = client.subscribe(
      `/topic/todo/${projectId}`,
      (message) => {
        const newMessage = JSON.parse(message.body);

        if (newMessage.memberId !== memberId) {
          queryClient.invalidateQueries({
            queryKey: ["todoList", projectId],
          });
        }

        console.log("📥 새 메시지 도착:", newMessage);
      },
      {
        Authorization: `${accessToken}`,
      }
    );

    return () => {
      subscription.unsubscribe({
        Authorization: `${accessToken}`,
      });
    };
  }, [client?.connected, projectId, connSeq, memberId]);

  return (
    <TaskContainer>
      <TaskHeader>
        <div />
        <HeaderTitle>
          <LuListMinus />
          <p>내용</p>
        </HeaderTitle>
        <HeaderTitle>
          <BiRightArrowCircle />
          <p>상태 </p>
        </HeaderTitle>
        <HeaderTitle>
          <HiHashtag />
          <p>담당자</p>
        </HeaderTitle>
        <HeaderTitle>
          <AiOutlineCalendar />
          <p>일정</p>
        </HeaderTitle>
        <div />
      </TaskHeader>

      {tasks.map((todo) => (
        <ToDoCard
          key={todo.todoId}
          task={todo}
          onUpdate={updateTodoHandler}
          onOpenModal={handleOpenModal}
          onDelete={deleteTodoHandler}
        />
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
              projectId={projectId}
              task={payload}
              onUpdate={updateTodoHandler}
            />
          )}
          {modalType === "date" && (
            <DateModal task={payload} onUpdate={updateTodoHandler} />
          )}
        </ModalContainer>
      )}
    </TaskContainer>
  );
};

export default Task;
