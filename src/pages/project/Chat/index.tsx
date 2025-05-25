import ChatMessages from "@/components/project/chat/ChatMessages";
import { ChatSection, MeetContainer } from "./style";
import ChatInput from "@/components/project/chat/ChatInput";
import { useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";

const Chat = () => {
  // 임시 함수
  const projectId = 1;
  const memberId = 1;

  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const client = new Client({
      brokerURL: `${import.meta.env.VITE_API_URL}/ws`,
      reconnectDelay: 5000,
      // heartbeatIncoming: 4000,
      // heartbeatOutgoing: 4000,
      debug: (msg) => console.log("[STOMP]", msg),
      onConnect: () => {
        console.log("✅ 웹소켓 연결 (Chat 컴포넌트)");
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
      console.log("❌ 웹소켓 종료 (Chat 컴포넌트)");
    };
  }, []);

  return (
    <MeetContainer>
      <ChatSection>
        <ChatMessages roomId={projectId} client={clientRef.current} />
        <ChatInput
          roomId={projectId}
          senderId={memberId}
          client={clientRef.current}
        />
      </ChatSection>
    </MeetContainer>
  );
};

export default Chat;
