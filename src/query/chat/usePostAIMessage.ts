import { sendAiMessage } from "@/apis/chat/chat";
import { AiMessageResponse } from "@/types/chat";
import { useMutation } from "@tanstack/react-query";

export const useSendAiMessage = (roomId: number) => {
  return useMutation({
    mutationFn: (body: AiMessageResponse) => sendAiMessage(roomId, body),
  });
};
