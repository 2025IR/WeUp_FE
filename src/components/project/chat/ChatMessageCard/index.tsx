import { ChatCardProps } from "@/types/chat";
import {
  ContainerCard,
  ImageCard,
  ImgWrapper,
  MessageTime,
  MyCardContainer,
  MyTextCard,
  TextCard,
  TextCardWrapper,
} from "./style";
import { formatChatTime } from "@/utils/formatTime";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import React from "react";

const ChatMessageCard = React.memo(
  ({
    senderId,
    senderName,
    senderProfileImage,
    message,
    sentAt,
    isImage,
    isShowTime,
    isShowUserInfo,
  }: ChatCardProps) => {
    const userId = useSelector((state: RootState) => state.auth.userId);
    const isRight = senderId === userId;

    if (isRight) {
      return (
        <MyCardContainer>
          {isShowTime && <MessageTime>{formatChatTime(sentAt)}</MessageTime>}
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
        <ImgWrapper>
          {isShowUserInfo && (
            <img src={senderProfileImage} alt="user-profile" />
          )}
        </ImgWrapper>
        <TextCardWrapper>
          {isShowUserInfo && <p>{senderName}</p>}
          {isImage ? (
            <ImageCard src={message} />
          ) : (
            <TextCard>
              <p>{message}</p>
            </TextCard>
          )}
        </TextCardWrapper>
        {isShowTime && <MessageTime>{formatChatTime(sentAt)}</MessageTime>}
      </ContainerCard>
    );
  }
);

export default ChatMessageCard;
