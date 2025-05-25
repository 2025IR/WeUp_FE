import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import ChatMessages from "@/components/project/chat/ChatMessages";
import ChatInput from "@/components/project/chat/ChatInput";
import { ChatSection, MeetContainer } from "./style";
import { ChatMessageProps } from "@/types/chat";

const Chat = () => {
  const projectId = 18;
  const memberId = 1;

  const clientRef = useRef<Client | null>(null);
  const [newMessages, setNewMessages] = useState<ChatMessageProps[]>([]);

  useEffect(() => {
    const client = new Client({
      brokerURL: `${import.meta.env.VITE_API_URL}/ws`,
      reconnectDelay: 5000,
      debug: (msg) => console.log("[STOMP]", msg),
      onConnect: () => {
        console.log("✅ 웹소켓 연결 (Chat 컴포넌트)");

        client.subscribe(`/topic/chat/${projectId}`, (message) => {
          const newMessage = JSON.parse(message.body);
          console.log("📥 새 메시지 도착:", newMessage);
          setNewMessages((prev) => [...prev, newMessage]);
        });

        console.log(`📡 구독 완료: /topic/chat/${projectId}`);
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
        <ChatMessages
          roomId={projectId}
          client={clientRef.current}
          newMessages={newMessages}
        />
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
