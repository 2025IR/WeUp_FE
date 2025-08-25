import { useGetChat } from "@/query/chat/useGetChat";
import ChatMessageCard from "../ChatMessageCard";
import { MessagesContainer } from "./style";
import { ChatMessagesProps } from "./type";
import { useEffect, useRef, useState } from "react";
import { ChatMessageProps } from "@/types/chat";
import { RootState } from "@/store/store";
import queryClient from "@/query/reactQueryClient";
import { useSelector } from "react-redux";
import { useStomp } from "@/contexts/StompContext";

const ChatMessages = ({ roomId }: ChatMessagesProps) => {
  const projectId = useSelector((state: RootState) => state.project.id);

  // 데이터 내역 받아오는 함수
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetChat(roomId);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isAtBottom = useRef(true);
  const prevScrollHeightRef = useRef(0);

  // 웹소켓으로 새로 넘어오는 데이터 상태관리
  const [newMessages, setNewMessages] = useState<ChatMessageProps[]>([]);

  // 웹소켓 + 페이지네이션으로 넘어오는 채팅 데이터 하나의 리스트로 관리
  const allMessages = [
    ...(data?.pages
      .slice()
      .reverse()
      .flatMap((page) => page.content) ?? []),
    ...newMessages,
  ];

  // 서버에서 새 데이터 오면 초기화 (중복 방지)
  useEffect(() => {
    setNewMessages([]);
  }, [data]);

  // 구독, 메세지 창 변경되면 웹소켓 유지한 채로 구독 정보 변경
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const { client, connSeq } = useStomp();
  useEffect(() => {
    if (!client || !client.connected) return;

    const subscription = client.subscribe(
      `/topic/chat/active/${roomId}`,
      (message) => {
        const newMessage = JSON.parse(message.body);

        // 새 메시지가 시스템 메시지인 경우, 채팅방 목록을 갱신
        if (newMessage.senderType === "SYSTEM") {
          queryClient.invalidateQueries({
            queryKey: ["chatRoomList", projectId],
          });
        }

        if (newMessage.message) {
          setNewMessages((prev) => [...prev, newMessage]);
        } else {
          queryClient.invalidateQueries({
            queryKey: ["chatMessages", roomId],
          });
        }

        console.log("📥 새 메시지 도착:", newMessage);
      },
      {
        Authorization: `${accessToken}`,
      }
    );

    return () => {
      subscription.unsubscribe({
        Authorization: `${accessToken}`,
        destination: `/topic/chat/active/${roomId}`,
      });
    };
  }, [client, connSeq, roomId]);

  // 데이터 받아온 이후
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    // 데이터 처음 불러왔을 때, 스크롤 최하단 위치.
    if (data?.pages.length === 1) {
      container.scrollTop = container?.scrollHeight;
    }

    requestAnimationFrame(() => {
      const newHeight = container.scrollHeight;
      const prevHeight = prevScrollHeightRef.current;
      const scrollDelta = newHeight - prevHeight;
      container.scrollTop = scrollDelta;
    });
  }, [data]);

  // 스크롤 이동 시 맨 아래 있는지 확인 & 스크롤 맨 위로 올리면 다음 데이터 호출
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    isAtBottom.current =
      container.scrollHeight - container.scrollTop - container.clientHeight <=
      20;

    if (container.scrollTop === 0 && hasNextPage && !isFetchingNextPage) {
      // 데이터 부르기 전 이전 높이 기억
      prevScrollHeightRef.current = container.scrollHeight;
      fetchNextPage();
    }
  };

  // 스크롤 맨 아래 위치 시 부드럽게 최 하단으로 이동
  useEffect(() => {
    if (isAtBottom.current) {
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [newMessages]);

  return (
    <MessagesContainer ref={containerRef} onScroll={handleScroll}>
      {allMessages.map((msg, index) => {
        const nextChat = allMessages[index + 1];
        const isShowTime = !nextChat || nextChat.displayType !== "SAME_TIME";
        const isShowUserInfo = msg.displayType === "DEFAULT";

        return (
          <ChatMessageCard
            key={index}
            isShowTime={isShowTime}
            isShowUserInfo={isShowUserInfo}
            {...msg}
          />
        );
      })}
      <div ref={scrollRef} />
    </MessagesContainer>
  );
};

export default ChatMessages;
