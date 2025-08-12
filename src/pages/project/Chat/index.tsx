import { useParams } from "react-router-dom";
import useStompClient from "@/hooks/useStompClient";
import ChatSection from "@/components/project/chat/ChatSection";
import { ChatMain, MeetContainer } from "./style";
import ChatList from "@/components/project/chat/ChatList";
import { useEffect, useState } from "react";
import ChatHeader from "@/components/project/chat/ChatHeader";
import { useChatRoomList } from "@/query/chat/useGetChatRoomList";

const Chat = () => {
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const client = useStompClient();

  const [selectedChat, setSelectedChat] = useState(1);
  const { data: chatRooms = [] } = useChatRoomList(parsedProjectId);
  const selectedRoom = chatRooms?.find(
    (room) => room.chatRoomId === selectedChat
  );

  useEffect(() => {
    if (selectedRoom === undefined) {
      const basicRoom = chatRooms.find((room) => room.isBasic === true);
      if (basicRoom) {
        setSelectedChat(basicRoom.chatRoomId);
      }
    }
  }, [chatRooms, selectedRoom]);

  return (
    <MeetContainer>
      {/* 채팅 리스트 */}
      <ChatList
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        chatRooms={chatRooms}
      />

      {/* 채팅섹션 */}
      {selectedRoom ? (
        <ChatMain>
          <ChatHeader
            chatRoom={{
              id: selectedRoom.chatRoomId,
              title: selectedRoom.chatRoomName,
              members: selectedRoom.chatRoomMemberNames,
            }}
            projectId={parsedProjectId}
          />
          <ChatSection roomId={selectedRoom.chatRoomId} client={client} />
        </ChatMain>
      ) : (
        <ChatMain></ChatMain>
      )}
    </MeetContainer>
  );
};

export default Chat;
