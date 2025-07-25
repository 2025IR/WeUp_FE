import { BiEditAlt, BiExit } from "react-icons/bi";
import { ChatRoomInfo, Container, IconWrapper } from "./style";
import { AiOutlineUserAdd } from "react-icons/ai";

interface ChatHeaderInfo {
  id: number;
  title: string;
  members: string[];
}

const ChatHeader = ({ chatRoom }: { chatRoom: ChatHeaderInfo }) => {
  return (
    <Container>
      <ChatRoomInfo>
        <h1>{chatRoom.title}</h1>
        <p>{chatRoom.members + ""}</p>
      </ChatRoomInfo>

      <IconWrapper>
        <BiEditAlt />
        <AiOutlineUserAdd />
        <BiExit />
      </IconWrapper>
    </Container>
  );
};

export default ChatHeader;
