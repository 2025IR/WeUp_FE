import { sendImageMessage } from "@/apis/chat/chat";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Props = {
  data: FormData;
  roomId: number;
};

export const useSendImage = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: AxiosError<{ message: string }>) => void;
}) => {
  return useMutation({
    mutationFn: ({ data, roomId }: Props) => sendImageMessage(data, roomId),
    onSuccess,
    onError,
  });
};
