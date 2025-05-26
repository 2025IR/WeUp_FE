import { sendImageMessage } from "@/apis/chat/chat";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useSendImage = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: AxiosError<{ message: string }>) => void;
}) => {
  return useMutation({
    mutationFn: (data: FormData) => sendImageMessage(data),
    onSuccess,
    onError,
  });
};
