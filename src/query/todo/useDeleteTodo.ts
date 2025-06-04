import { useMutation } from "@tanstack/react-query";
import { deleteTodo } from "@/apis/todo/todo";
import queryClient from "../reactQueryClient";

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: (todoId: number) => deleteTodo(todoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todoList"] });
    },
  });
};
