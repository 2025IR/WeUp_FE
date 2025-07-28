import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

const useStompClient = () => {
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: `${import.meta.env.VITE_API_URL}/ws`,
      reconnectDelay: 5000,
      debug: (msg) => console.log("[STOMP]", msg),
      onConnect: () => {
        console.log("✅ 웹소켓 연결됨 (useStompClient)");
        setClient(stompClient);
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate();
      console.log("❌ 웹소켓 종료 (useStompClient)");
    };
  }, []);

  return client;
};

export default useStompClient;
