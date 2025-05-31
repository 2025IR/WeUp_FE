import { getTodoList } from "@/apis/todo/todo";
import { useQuery } from "@tanstack/react-query";

export const useGetTodoList = (project_id: number) => {
  return useQuery({
    queryKey: ["todoList", project_id],
    queryFn: () => getTodoList(project_id),
  });
};
