import { RootState } from "@/store/store";
import { Client } from "@stomp/stompjs";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";

interface StompContextType {
  client: Client | null;
  connSeq: number;
}

const StompContext = createContext<StompContextType | null>(null);

export const useStomp = () => {
  const v = useContext(StompContext);
  if (!v) throw new Error("useStomp must be used within <StompProvider />");
  return v;
};

const StompProvider = ({ children }: { children: ReactNode }) => {
  const [client, setClient] = useState<Client | null>(null);
  const [connSeq, setConnSeq] = useState(0);
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  useEffect(() => {
    if (!accessToken) {
      setClient(null);
      return;
    }
    const stompClient = new Client({
      brokerURL: `${import.meta.env.VITE_WS_URL}`,
      reconnectDelay: 5000,
      debug: (msg) => console.log("[STOMP]", msg),
      onConnect: () => {
        console.log("✅ 웹소켓 연결됨 (useStompClient)");
        setClient(stompClient);
        setConnSeq((count) => count + 1);
      },
      connectHeaders: {
        Authorization: `${accessToken}`,
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate();
      setClient(null);
      console.log("❌ 웹소켓 종료 (useStompClient)");
    };
  }, [accessToken]);

  return (
    <StompContext.Provider value={{ client, connSeq }}>
      {children}
    </StompContext.Provider>
  );
};

export default StompProvider;
