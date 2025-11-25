import { updateProject } from "@/apis/project/project";
import { setApiMessage } from "@/store/alert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

export const useUpdateProject = ({ onSuccess }: { onSuccess?: () => void }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ projectId, data }: { projectId: number; data: FormData }) =>
      updateProject(projectId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projectList"] });

      dispatch(
        setApiMessage({
          message: "프로젝트 수정 성공",
          type: "success",
        })
      );

      onSuccess?.();
    },
    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "프로젝트 수정 실패",
          type: "error",
        })
      );
    },
  });
};
