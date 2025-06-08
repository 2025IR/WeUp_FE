import { sendAiMessage } from "@/apis/chat/chat";
import { useMutation } from "@tanstack/react-query";

export const useSendAiMessage = () => {
  return useMutation({
    mutationFn: sendAiMessage,
  });
};
