import IconLabel from "@/components/common/IconLabel";
import {
  ChatInfo,
  ChatListItem,
  ChatListWrapper,
  ChatTextBlock,
  Container,
  NewChatArea,
  Title,
  UnreadBadge,
} from "./style";
import { BiChat } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { ChatRoom } from "./type";

const dummyChatRooms: ChatRoom[] = [
  {
    id: 1,
    title: "전체 회의방",
    preview: "7시 반에 회의하는거 어떤가요??",
    unreadCount: 5,
    members: ["윤석", "지민", "태형", "정국"],
  },
  {
    id: 2,
    title: "기획 파트",
    preview: "이번 화면 구성안 검토해봤어!",
    unreadCount: 0,
    members: ["윤석", "지민"],
  },
  {
    id: 3,
    title: "디자인",
    preview: "Figma 새로 올렸어~ 확인 부탁해!",
    unreadCount: 2,
    members: ["태형", "정국", "윤석"],
  },
];

interface ChatListProps {
  selectedChat: number | null;
  setSelectedChat: React.Dispatch<React.SetStateAction<number>>;
}

const ChatList = ({ selectedChat, setSelectedChat }: ChatListProps) => {
  console.log(selectedChat);
  return (
    <Container>
      <Title>
        <IconLabel
          icon={<BiChat />}
          size="lg"
          fontSize="body"
          fontWeight="semibold"
          colors="textLight"
        >
          Chat
        </IconLabel>
      </Title>
      <ChatListWrapper>
        {/* 채팅방 리스트 */}
        {dummyChatRooms.map((room) => (
          <ChatListItem
            key={room.id}
            selected={selectedChat === room.id}
            onClick={() => setSelectedChat(room.id)}
          >
            <ChatInfo>
              <ChatTextBlock>
                <h3>{room.title}</h3>
                <p>{room.preview}</p>
              </ChatTextBlock>

              <IconLabel
                icon={<BsFillPersonFill />}
                size="sm"
                fontSize="caption"
                colors="textLight"
                gap="6px"
              >
                {room.members.length}
              </IconLabel>
            </ChatInfo>
            {room.unreadCount !== 0 && (
              <UnreadBadge>
                <p>{room.unreadCount}</p>
              </UnreadBadge>
            )}
          </ChatListItem>
        ))}

        {/* 채팅방 생성 */}
        <NewChatArea>
          <AiOutlinePlus />
        </NewChatArea>
      </ChatListWrapper>
    </Container>
  );
};

export default ChatList;
