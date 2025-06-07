import { ChatMessageProps } from "@/types/chat";
import {
  ContainerCard,
  ImageCard,
  MessageTime,
  MyCardContainer,
  MyTextCard,
  TextCard,
  TextCardWrapper,
} from "./style";
import { formatChatTime } from "@/utils/formatTime";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ChatMessageCard = ({
  senderId,
  senderName,
  senderProfileImage,
  message,
  sentAt,
  isImage,
}: ChatMessageProps) => {
  const userId = useSelector((state: RootState) => state.auth.userId);
  const isRight = senderId === userId;

  if (isRight) {
    return (
      <MyCardContainer>
        <MessageTime>{formatChatTime(sentAt)}</MessageTime>
        {isImage ? (
          <ImageCard src={message} alt="" />
        ) : (
          <MyTextCard>
            <p>{message}</p>
          </MyTextCard>
        )}
      </MyCardContainer>
    );
  }

  return (
    <ContainerCard>
      <img src={senderProfileImage} alt="user-profile" />
      <TextCardWrapper>
        <p>{senderName}</p>
        {isImage ? (
          <ImageCard src={message} />
        ) : (
          <TextCard>
            <p>{message}</p>
          </TextCard>
        )}
      </TextCardWrapper>
      <MessageTime>{formatChatTime(sentAt)}</MessageTime>
    </ContainerCard>
  );
};

export default ChatMessageCard;
