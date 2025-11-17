// @/hooks/chat/useInviteMembers.ts
import { inviteMembers } from "@/apis/chat/chat";
import { setApiMessage } from "@/store/alert";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

interface Params {
  chatRoomId: number;
  inviteMemberIds: number[];
}

export const useInviteMembers = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: ({ chatRoomId, inviteMemberIds }: Params) =>
      inviteMembers(chatRoomId, inviteMemberIds),

    onSuccess: () => {
      dispatch(
        setApiMessage({
          message: "팀원 초대 성공",
          type: "success",
        })
      );
    },

    onError: (err: AxiosError<{ message: string }>) => {
      dispatch(
        setApiMessage({
          message: err.response?.data.message ?? "팀원 초대 실패",
          type: "error",
        })
      );
    },
  });
};
