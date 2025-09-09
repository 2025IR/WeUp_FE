// @/hooks/chat/useInviteMembers.ts
import { editChatRoomTitle } from "@/apis/chat/chat";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

interface Params {
  chatRoomId: number;
  chatRoomName: string;
}

export const useEditChatRoomTitle = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: ({ chatRoomId, chatRoomName }: Params) =>
      editChatRoomTitle(chatRoomId, chatRoomName),

    onSuccess: () => {
      dispatch(setApiMessage({ message: "채팅방 수정 성공", type: "success" }));
    },
    onError: () => {
      dispatch(setApiMessage({ message: "채팅방 수정 실패", type: "error" }));
    },
  });
};
