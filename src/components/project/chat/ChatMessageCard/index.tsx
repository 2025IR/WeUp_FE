import {
  ContainerCard,
  ImageCard,
  MessageTime,
  MyCardContainer,
  MyTextCard,
  TextCard,
  TextCardWrapper,
} from "./style";

type ChatMessageCardProps = {
  senderMe: boolean;
  name: string;
  text: string;
  time: string;
  profile: string;
  isImage: boolean;
};

const ChatMessageCard = ({
  senderMe,
  name,
  text,
  time,
  profile,
  isImage,
}: ChatMessageCardProps) => {
  if (senderMe) {
    return (
      <MyCardContainer>
        <MessageTime>{time}</MessageTime>
        {isImage ? (
          <ImageCard src={text} alt="" />
        ) : (
          <MyTextCard>
            <p>{text}</p>
          </MyTextCard>
        )}
      </MyCardContainer>
    );
  }

  return (
    <ContainerCard>
      <img src={profile} alt="user-profile" />
      <TextCardWrapper>
        <p>{name}</p>
        {isImage ? (
          <ImageCard src={text} alt="" />
        ) : (
          <TextCard>
            <p>{text}</p>
          </TextCard>
        )}
      </TextCardWrapper>

      <MessageTime>{time}</MessageTime>
    </ContainerCard>
  );
};

export default ChatMessageCard;
