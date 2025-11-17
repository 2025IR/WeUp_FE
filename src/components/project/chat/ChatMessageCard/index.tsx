import { ChatCardProps } from "@/types/chat";
import {
  AiTextCard,
  ContainerCard,
  ImageCard,
  ImgWrapper,
  MessageInfo,
  MessageTime,
  MessageUnreadCount,
  MyCardContainer,
  MyMessageInfo,
  MyTextCard,
  ReplyMessage,
  ReplyName,
  StyledTag,
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
    isPrompt,
    isShowTime,
    isShowUserInfo,
    senderType,
    originalMessage,
    originalSenderName,
    unreadCount,
  }: ChatCardProps) => {
    const userId = useSelector((state: RootState) => state.project.memberId);
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
          <MyMessageInfo>
            {unreadCount !== 0 && (
              <MessageUnreadCount>{unreadCount}</MessageUnreadCount>
            )}
            {isShowTime && <MessageTime>{formatChatTime(sentAt)}</MessageTime>}
          </MyMessageInfo>
          {isImage ? (
            <ImageCard src={message} alt="" />
          ) : (
            <MyTextCard>
              {isPrompt && <StyledTag>@AI 비서</StyledTag>}
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
          <MessageInfo>
            {unreadCount !== 0 && (
              <MessageUnreadCount>{unreadCount}</MessageUnreadCount>
            )}
            {isShowTime && <MessageTime>{formatChatTime(sentAt)}</MessageTime>}
          </MessageInfo>
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
              {isPrompt && <StyledTag>@AI 비서</StyledTag>}
              <p>{message}</p>
            </TextCard>
          )}
        </TextCardWrapper>

        <MessageInfo>
          {unreadCount !== 0 && (
            <MessageUnreadCount>{unreadCount}</MessageUnreadCount>
          )}
          {isShowTime && <MessageTime>{formatChatTime(sentAt)}</MessageTime>}
        </MessageInfo>
      </ContainerCard>
    );
  }
);

export default ChatMessageCard;
