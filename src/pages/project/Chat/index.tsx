import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import ChatMessages from "@/components/project/chat/ChatMessages";
import ChatInput from "@/components/project/chat/ChatInput";
import { ChatSection, MeetContainer } from "./style";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Chat = () => {
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const memberId = useSelector((state: RootState) => state.auth.userId);

  const [stompClient, setStompClient] = useState<Client | null>(null);

  useEffect(() => {
    const client = new Client({
      brokerURL: `${import.meta.env.VITE_API_URL}/ws`,
      reconnectDelay: 5000,
      debug: (msg) => console.log("[STOMP]", msg),
      onConnect: () => {
        console.log("✅ 웹소켓 연결 (Chat 컴포넌트)");
        setStompClient(client);
      },
    });

    client.activate();
    return () => {
      client.deactivate();
      console.log("❌ 웹소켓 종료 (Chat 컴포넌트)");
    };
  }, []);

  return (
    <MeetContainer>
      <ChatSection>
        <ChatMessages roomId={parsedProjectId} client={stompClient} />

        <ChatInput
          roomId={parsedProjectId}
          senderId={memberId!}
          client={stompClient}
        />
      </ChatSection>
    </MeetContainer>
  );
};

export default Chat;
