import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import useStompClient from "@/hooks/useStompClient";
import ChatSection from "@/components/project/chat/ChatSection";
import { ChatMain, MeetContainer } from "./style";
import ChatList from "@/components/project/chat/ChatList";
import { useState } from "react";
import ChatHeader from "@/components/project/chat/ChatHeader";
import { ChatRoom } from "./type";

const dummyChatRooms: ChatRoom[] = [
  {
    id: 1,
    title: "전체 회의방",
    preview: "7시 반에 회의하는거 어떤가요??",
    unreadCount: 5,
    members: ["윤석", "지민", "태형", "정국"],
  },
  {
    id: 2,
    title: "기획 파트",
    preview: "이번 화면 구성안 검토해봤어!",
    unreadCount: 0,
    members: ["윤석", "지민"],
  },
  {
    id: 3,
    title: "디자인",
    preview: "Figma 새로 올렸어~ 확인 부탁해!",
    unreadCount: 2,
    members: ["태형", "정국", "윤석"],
  },
];

const Chat = () => {
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const memberId = useSelector((state: RootState) => state.auth.userId);
  const client = useStompClient();

  const [selectedChat, setSelectedChat] = useState(1);
  const selectedRoom = dummyChatRooms.find((room) => room.id === selectedChat);

  return (
    <MeetContainer>
      {/* 채팅 리스트 */}
      <ChatList
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        dummyChatRooms={dummyChatRooms}
      />

      {/* 채팅섹션 */}
      <ChatMain>
        <ChatHeader
          chatRoom={{
            id: selectedRoom?.id ?? 0,
            title: selectedRoom?.title ?? "",
            members: selectedRoom?.members ?? [],
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
