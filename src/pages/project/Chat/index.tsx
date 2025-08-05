import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import useStompClient from "@/hooks/useStompClient";
import ChatSection from "@/components/project/chat/ChatSection";
import { ChatMain, MeetContainer } from "./style";
import ChatList from "@/components/project/chat/ChatList";
import { useState } from "react";
import ChatHeader from "@/components/project/chat/ChatHeader";
import { useChatRoomList } from "@/query/chat/useGetChatRoomList";

const Chat = () => {
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const memberId = useSelector((state: RootState) => state.auth.userId);
  const client = useStompClient();

  const [selectedChat, setSelectedChat] = useState(1);
  const { data: chatRooms = [] } = useChatRoomList(parsedProjectId);
  console.log(chatRooms);
  const selectedRoom = chatRooms?.find(
    (room) => room.chatRoomId === selectedChat
  );

  return (
    <MeetContainer>
      {/* 채팅 리스트 */}
      <ChatList
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        chatRooms={chatRooms}
      />

      {/* 채팅섹션 */}
      <ChatMain>
        <ChatHeader
          chatRoom={{
            id: selectedRoom?.chatRoomId ?? 0,
            title: selectedRoom?.chatRoomName ?? "",
            members: selectedRoom?.chatRoomMemberNames ?? [],
          }}
        />
        <ChatSection
          roomId={parsedProjectId}
          memberId={memberId}
          client={client}
        />
      </ChatMain>
    </MeetContainer>
  );
};

export default Chat;
