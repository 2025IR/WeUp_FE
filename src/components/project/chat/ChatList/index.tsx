import IconLabel from "@/components/common/IconLabel";
import { ChatListWrapper, Container, NewChatArea, Title } from "./style";
import { BiChat } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import ChatCreateModal from "../ChatCreateModal";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ChatListCard from "../ChatListCard";
import { ChatRoomItem } from "@/types/chat";

interface ChatListProps {
  chatRooms: ChatRoomItem[];
  selectedChat: number | null;
  setSelectedChat: React.Dispatch<React.SetStateAction<number>>;
}

const ChatList = ({
  selectedChat,
  setSelectedChat,
  chatRooms,
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
          채팅
        </IconLabel>
      </Title>
      <ChatListWrapper>
        {/* 채팅방 리스트 */}
        {chatRooms?.map((room) => (
          <ChatListCard
            key={room.chatRoomId}
            room={room}
            selected={selectedChat === room.chatRoomId}
            onClick={() => setSelectedChat(room.chatRoomId)}
          />
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
