import { updateTodoStatus } from "@/apis/todo/todo";
import { useMutation } from "@tanstack/react-query";

export const useUpdateTodoStatus = () => {
  return useMutation({
    mutationFn: (payload: { todoId: number; status: number }) =>
      updateTodoStatus(payload),
  });
};
