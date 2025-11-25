import { deleteProject } from "@/apis/project/project";
import { setApiMessage } from "@/store/alert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

export const useDeleteProject = ({ onSuccess }: { onSuccess?: () => void }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError<{ message: string }>, number>({
    mutationFn: (projectId: number) => deleteProject(projectId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projectList"] });

      dispatch(
        setApiMessage({
          message: "프로젝트 삭제 성공",
          type: "success",
        })
      );

      onSuccess?.();
    },
    onError: (err) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "프로젝트 삭제 실패",
          type: "error",
        })
      );
    },
  });
};
