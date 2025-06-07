import { useMutation } from "@tanstack/react-query";
import { TodoUpdateType } from "@/types/todo";
import { updateTodo } from "@/apis/todo/todo";

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: (updated: Partial<TodoUpdateType> & { todoId: number }) =>
      updateTodo(updated),
  });
};
