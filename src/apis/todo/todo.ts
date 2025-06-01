import { TodoType, TodoUpdateType } from "@/types/todo";
import instance from "../axiosInstance";

// 투두 생성
export const CreateTodo = (projectId: number) => {
  return instance.post("/todo/create", { projectId });
};

// 투두 리스트 데이터
export const getTodoList = async (project_id: number): Promise<TodoType[]> => {
  const res = await instance.post(`/todo/list/${project_id}`);
  return res.data.data;
};

// 투두 리스트 수정
export const updateTodo = async (
  updated: Partial<TodoUpdateType> & { todoId: number }
) => {
  console.log(updated);
  const res = await instance.put("/todo/edit", updated, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data.data;
};

// 투두 리스트 상태 수정
export const updateTodoStatus = async (payload: {
  todoId: number;
  status: number;
}) => {
  console.log(payload);
  const res = await instance.put("/todo/state", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.data.data;
};

// 투두 삭제
export const deleteTodo = (todoId: number) => {
  return instance.delete(`/todo/delete/${todoId}`);
};
