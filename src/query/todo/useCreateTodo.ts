import { useMutation } from "@tanstack/react-query";
import { CreateTodo } from "@/apis/todo/todo";
import queryClient from "../reactQueryClient";

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: (projectId: number) => CreateTodo(projectId),
    onSuccess: (_, projectId) => {
      queryClient.invalidateQueries({ queryKey: ["todoList", projectId] });
    },
  });
};
