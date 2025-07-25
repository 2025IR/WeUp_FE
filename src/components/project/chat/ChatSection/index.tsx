import ChatMessages from "@/components/project/chat/ChatMessages";
import ChatInput from "@/components/project/chat/ChatInput";
import { Container } from "./style";
import { Client } from "@stomp/stompjs";

interface ChatSectionProps {
  roomId: number;
  memberId: number | null;
  client: Client | null;
}

const ChatSection = ({ roomId, memberId, client }: ChatSectionProps) => {
  return (
    <Container>
      <ChatMessages roomId={roomId} client={client} />
      <ChatInput roomId={roomId} senderId={memberId!} client={client} />
    </Container>
  );
};

export default ChatSection;
