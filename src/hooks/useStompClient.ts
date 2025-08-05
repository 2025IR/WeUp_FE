import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import { store } from "@/store/store";

const useStompClient = () => {
  const [client, setClient] = useState<Client | null>(null);
  const token = store.getState().auth;

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: `${import.meta.env.VITE_API_URL}/ws`,
      reconnectDelay: 5000,
      debug: (msg) => console.log("[STOMP]", msg),
      onConnect: () => {
        console.log("✅ 웹소켓 연결됨 (useStompClient)");
        setClient(stompClient);
      },
      connectHeaders: {
        Authorization: `${token.accessToken}`,
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate();
      console.log("❌ 웹소켓 종료 (useStompClient)");
    };
  }, [token.accessToken]);

  return client;
};

export default useStompClient;
