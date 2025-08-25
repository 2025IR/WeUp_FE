import { getTodoList } from "@/apis/todo/todo";
import { useQuery } from "@tanstack/react-query";

export const useGetTodoList = (projectId: number | null) => {
  return useQuery({
    queryKey: ["todoList", projectId],
    queryFn: () => {
      if (projectId == null) throw new Error("projectId is required");
      return getTodoList(projectId!);
    },
    enabled: !!projectId,
  });
};
