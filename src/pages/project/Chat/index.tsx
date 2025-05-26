import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import ChatMessages from "@/components/project/chat/ChatMessages";
import ChatInput from "@/components/project/chat/ChatInput";
import { ChatSection, MeetContainer } from "./style";

const Chat = () => {
  const projectId = 16;
  const memberId = 6;

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
        <ChatMessages roomId={projectId} client={stompClient} />

        <ChatInput
          roomId={projectId}
          senderId={memberId}
          client={stompClient}
        />
      </ChatSection>
    </MeetContainer>
  );
};

export default Chat;
