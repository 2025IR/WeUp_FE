import { deleteProjectTest } from "@/apis/project/project";
import { useMutation } from "@tanstack/react-query";

export const useDeleteProjectTest = () => {
  return useMutation({
    mutationFn: deleteProjectTest,
  });
};
