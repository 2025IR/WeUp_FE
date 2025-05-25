import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import { useParams } from "react-router-dom";

type ChatMessage = {
  senderId: number;
  senderName: string;
  senderProfileImage: string;
  message: string;
  sentAt: string;
};

type ChatSendPayload = {
  senderId: number;
  message: string;
};

const BackupChat = () => {
  const { projectId } = useParams();
  const clientRef = useRef<Client | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");

  const currentUserId = 1;
  // const currentUserName = "정윤석";
  useEffect(() => {
    if (!projectId) return;

    const client = new Client({
      brokerURL: `https://6806-210-119-104-217.ngrok-free.app/ws`,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      debug: (msg) => console.log("[STOMP]", msg),
      onConnect: () => {
        console.log("✅ 웹소켓 연결됨");

        client.subscribe(`/topic/chat/${projectId}`, (message) => {
          const parsed: ChatMessage = JSON.parse(message.body);
          console.log("받은 메시지:", parsed);
          setMessages((prev) => [...prev, parsed]);
        });
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
      console.log("❌ 웹소켓 연결 종료");
    };
  }, [projectId]);

  const sendMessage = () => {
    if (!clientRef.current?.connected || !input.trim()) return;

    const payload: ChatSendPayload = {
      senderId: currentUserId,
      message: input,
    };

    clientRef.current.publish({
      destination: `/app/send/${projectId}`,
      body: JSON.stringify(payload),
    });

    setInput(""); // 입력창 초기화
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>🗨️ 채팅방 #{projectId}</h2>
      <div
        style={{
          border: "1px solid #ccc",
          height: "400px",
          overflowY: "scroll",
          padding: "0.5rem",
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf:
                msg.senderId === currentUserId ? "flex-end" : "flex-start",
              background: msg.senderId === currentUserId ? "#DCF8C6" : "#fff",
              border: "1px solid #ccc",
              padding: "0.5rem 1rem",
              borderRadius: "1rem",
              maxWidth: "70%",
            }}
          >
            <strong>{msg.senderName}</strong>
            <p style={{ margin: "4px 0" }}>{msg.message}</p>
            <small style={{ fontSize: "0.75rem", color: "#666" }}>
              {new Date(msg.sentAt).toLocaleTimeString()}
            </small>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="메시지 입력..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "0.5rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button onClick={sendMessage} style={{ padding: "0.5rem 1rem" }}>
          전송
        </button>
      </div>
    </div>
  );
};

export default BackupChat;
