import { ChatMessageProps } from "@/types/chat";
import {
  ContainerCard,
  // ImageCard,
  MessageTime,
  MyCardContainer,
  MyTextCard,
  TextCard,
  TextCardWrapper,
} from "./style";

const ChatMessageCard = ({
  senderId,
  senderName,
  senderProfileImage,
  message,
  sentAt,
}: ChatMessageProps) => {
  const isRight = senderId === 1;

  if (isRight) {
    return (
      <MyCardContainer>
        <MessageTime>{sentAt}</MessageTime>
        {/* {isImage ? (
          <ImageCard src={text} alt="" />
        ) : (
          <MyTextCard>
            <p>{text}</p>
          </MyTextCard>
        )} */}
        <MyTextCard>
          <p>{message}</p>
        </MyTextCard>
      </MyCardContainer>
    );
  }

  return (
    <ContainerCard>
      <img src={senderProfileImage} alt="user-profile" />
      <TextCardWrapper>
        <p>{senderName}</p>
        {/* {isImage ? (
          <ImageCard src={text} alt="" />
        ) : (
          <TextCard>
            <p>{text}</p>
          </TextCard>
        )} */}
        <TextCard>
          <p>{message}</p>
        </TextCard>
      </TextCardWrapper>

      <MessageTime>{sentAt}</MessageTime>
    </ContainerCard>
  );
};

export default ChatMessageCard;
