import { createProject } from "@/apis/project/project";
import { setApiMessage } from "@/store/alert";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

export const useCreateProject = ({
  onSuccess,
}: {
  onSuccess?: () => void;
  onError?: (error: AxiosError<{ message: string }>) => void;
}) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FormData) => createProject(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projectList"] });

      dispatch(
        setApiMessage({ message: "프로젝트 생성 성공", type: "success" })
      );
      onSuccess?.();
    },
    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "프로젝트 생성 실패",
          type: "error",
        })
      );
    },
  });
};
