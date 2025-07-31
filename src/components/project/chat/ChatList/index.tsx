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
import { useState } from "react";
import ChatCreateModal from "../ChatCreateModal";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface ChatListProps {
  dummyChatRooms: ChatRoom[];
  selectedChat: number | null;
  setSelectedChat: React.Dispatch<React.SetStateAction<number>>;
}

const ChatList = ({
  selectedChat,
  setSelectedChat,
  dummyChatRooms,
}: ChatListProps) => {
  const projectId = useSelector((state: RootState) => state.project.id);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

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
        <NewChatArea onClick={() => setIsCreateModalOpen(true)}>
          <AiOutlinePlus />
        </NewChatArea>
      </ChatListWrapper>

      {isCreateModalOpen && projectId && (
        <ChatCreateModal
          projectId={projectId}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </Container>
  );
};

export default ChatList;
