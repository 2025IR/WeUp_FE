import { ChatCardProps } from "@/types/chat";
import {
  AiTextCard,
  ContainerCard,
  ImageCard,
  ImgWrapper,
  MessageTime,
  MyCardContainer,
  MyTextCard,
  ReplyMessage,
  ReplyName,
  SystemCard,
  SystemCardContainer,
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
    senderType,
    originalMessage,
    originalSenderName,
  }: ChatCardProps) => {
    const userId = useSelector((state: RootState) => state.auth.userId);
    const isRight = senderId === userId;

    if (senderType === "SYSTEM") {
      return (
        <SystemCardContainer>
          <SystemCard>
            <p>{message}</p>
          </SystemCard>
        </SystemCardContainer>
      );
    }

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

    if (senderType === "AI") {
      return (
        <ContainerCard>
          <ImgWrapper>
            {isShowUserInfo && (
              <img src={senderProfileImage} alt="ai profile" />
            )}
          </ImgWrapper>
          <TextCardWrapper>
            {isShowUserInfo && <p>{senderName}</p>}
            {isImage ? (
              <ImageCard src={message} />
            ) : (
              <AiTextCard>
                <div>
                  <ReplyName>{originalSenderName}</ReplyName>
                  <ReplyMessage>{originalMessage}</ReplyMessage>
                </div>
                <hr />
                <p>{message}</p>
              </AiTextCard>
            )}
          </TextCardWrapper>
          {isShowTime && <MessageTime>{formatChatTime(sentAt)}</MessageTime>}
        </ContainerCard>
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
