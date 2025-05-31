import { useMutation } from "@tanstack/react-query";
import { TodoType } from "@/types/todo";
import { updateTodo } from "@/apis/todo/todo";

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: (updated: Partial<TodoType> & { todoId: number }) =>
      updateTodo(updated),
  });
};
