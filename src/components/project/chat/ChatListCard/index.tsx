import IconLabel from "@/components/common/IconLabel";
import { ChatInfo, ChatListItem, ChatTextBlock, UnreadBadge } from "./style";
import { BsFillPersonFill } from "react-icons/bs";
import { ChatRoomItem } from "@/types/chat";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { useStomp } from "@/contexts/StompContext";

type Props = {
  room: ChatRoomItem;
  selected: boolean;
  onClick: () => void;
};

const ChatListCard = ({ room, selected, onClick }: Props) => {
  console.log("여기", selected, room.chatRoomId);
  // 선택된 방 ref로 상태 등록
  const selectedRef = useRef(selected);
  useEffect(() => {
    selectedRef.current = selected;
  }, [selected]);

  // 기본 값 초기화
  const [unreadMessageCount, setUnreadMessageCount] = useState<number>(
    () => room.unreadMessageCount ?? 0
  );
  const [lastMessage, setLastMessage] = useState<string>(
    () => room.lastMessage ?? ""
  );

  // 방을 선택하면 해당 방은 알림 제거
  useEffect(() => {
    if (selected) setUnreadMessageCount(0);
  }, [selected]);

  // 구독, 메세지 창 변경되면 웹소켓 유지한 채로 구독 정보 변경
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const { client, connSeq } = useStomp();
  useEffect(() => {
    if (!client || !client.connected) return;

    const subscription = client.subscribe(
      `/topic/chat/connect/${room.chatRoomId}`,
      (message) => {
        const newMessage = JSON.parse(message.body);

        setLastMessage(newMessage.message);

        if (!selectedRef.current) setUnreadMessageCount((prev) => prev + 1);

        console.log("📥 새 메시지 도착:", newMessage);
      },
      {
        Authorization: `${accessToken}`,
      }
    );

    return () => {
      subscription.unsubscribe({
        Authorization: `${accessToken}`,
        destination: `/topic/chat/connect/${room.chatRoomId}`,
      });
    };
  }, [client?.connected, room.chatRoomId, connSeq]);

  return (
    <ChatListItem selected={selected} onClick={onClick}>
      <ChatInfo>
        <ChatTextBlock>
          <h3>{room.chatRoomName}</h3>
          <p>{lastMessage}</p>
        </ChatTextBlock>

        <IconLabel
          icon={<BsFillPersonFill />}
          size="sm"
          fontSize="caption"
          colors="textLight"
          gap="6px"
        >
          {room.chatRoomMemberNames.length}
        </IconLabel>
      </ChatInfo>

      {unreadMessageCount === 0 ? (
        <></>
      ) : (
        <UnreadBadge>
          <p>{unreadMessageCount}</p>
        </UnreadBadge>
      )}
    </ChatListItem>
  );
};

export default ChatListCard;
