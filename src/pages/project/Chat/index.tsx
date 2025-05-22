import ChatInput from "@/components/project/chat/ChatInput";
import ChatMessages from "@/components/project/chat/ChatMessages";
import { ChatSection, MeetContainer } from "./style";

const Chat = () => {
  return (
    <MeetContainer>
      <ChatSection>
        <ChatMessages />
        <ChatInput />
      </ChatSection>
    </MeetContainer>
  );
};

export default Chat;
