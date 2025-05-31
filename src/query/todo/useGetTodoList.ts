import { getTodoList } from "@/apis/todo/todo";
import { useQuery } from "@tanstack/react-query";

export const useGetTodoList = (projectId: number) => {
  return useQuery({
    queryKey: ["todoList", projectId],
    queryFn: () => getTodoList(projectId),
  });
};
