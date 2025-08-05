import ChatMessages from "@/components/project/chat/ChatMessages";
import ChatInput from "@/components/project/chat/ChatInput";
import { Container } from "./style";
import { Client } from "@stomp/stompjs";

interface ChatSectionProps {
  roomId: number;
  client: Client | null;
}

const ChatSection = ({ roomId, client }: ChatSectionProps) => {
  return (
    <Container>
      <ChatMessages roomId={roomId} client={client} />
      <ChatInput roomId={roomId} client={client} />
    </Container>
  );
};

export default ChatSection;
