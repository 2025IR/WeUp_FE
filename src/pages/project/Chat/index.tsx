import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import useStompClient from "@/hooks/useStompClient";
import ChatSection from "@/components/project/chat/ChatSection";
import { MeetContainer } from "./style";
import ChatList from "@/components/project/chat/ChatList";
import { useState } from "react";

const Chat = () => {
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const memberId = useSelector((state: RootState) => state.auth.userId);
  const client = useStompClient();

  const [selectedChat, setSelectedChat] = useState(1);

  return (
    <MeetContainer>
      {/* 채팅 리스트 */}
      <ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat} />

      {/* 채팅섹션 */}
      <ChatSection
        roomId={parsedProjectId}
        memberId={memberId}
        client={client}
      />
    </MeetContainer>
  );
};

export default Chat;
