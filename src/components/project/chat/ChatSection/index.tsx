import ChatMessages from "@/components/project/chat/ChatMessages";
import ChatInput from "@/components/project/chat/ChatInput";
import { Container } from "./style";

interface ChatSectionProps {
  roomId: number;
}

const ChatSection = ({ roomId }: ChatSectionProps) => {
  return (
    <Container>
      <ChatMessages roomId={roomId} />
      <ChatInput roomId={roomId} />
    </Container>
  );
};

export default ChatSection;
