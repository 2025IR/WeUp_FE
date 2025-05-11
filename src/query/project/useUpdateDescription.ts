import { updateProjectDescription } from "@/apis/project/project";
import { useMutation } from "@tanstack/react-query";

export const useUpdateDescription = () => {
  return useMutation({
    mutationFn: ({
      project_id,
      description,
    }: {
      project_id: number;
      description: string;
    }) => updateProjectDescription(project_id, description),
  });
};
