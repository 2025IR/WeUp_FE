import { useGetChat } from "@/query/chat/useGetChat";
import ChatMessageCard from "../ChatMessageCard";
import { MessagesContainer } from "./style";
import { ChatMessagesProps } from "./type";
import { useEffect, useRef, useState } from "react";
import { ChatMessageProps } from "@/types/chat";

const ChatMessages = ({ roomId, client }: ChatMessagesProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetChat(roomId);

  const [newMessages, setNewMessages] = useState<ChatMessageProps[]>([]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const prevScrollHeight = useRef<number>(0);
  const isAtBottom = useRef(true);

  const allMessages = [
    ...(data?.pages.flatMap((page) => page.content) ?? []),
    ...newMessages,
  ];

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const bottomThreshold = 20;
    isAtBottom.current =
      container.scrollHeight - container.scrollTop - container.clientHeight <=
      bottomThreshold;

    if (container.scrollTop === 0 && hasNextPage && !isFetchingNextPage) {
      prevScrollHeight.current = container.scrollHeight;
      fetchNextPage();
    }
  };

  useEffect(() => {
    if (!containerRef.current || !isFetchingNextPage) return;

    const container = containerRef.current;
    const prevHeight = prevScrollHeight.current;

    requestAnimationFrame(() => {
      const newHeight = container.scrollHeight;
      container.scrollTop = newHeight - prevHeight;
    });
  }, [data]);

  useEffect(() => {
    if (!client || !roomId) return;

    const subscription = client.subscribe(
      `/topic/chat/${roomId}`,
      (message) => {
        const newMessage = JSON.parse(message.body);
        setNewMessages((prev) => [...prev, newMessage]);
      }
    );

    return () => subscription.unsubscribe();
  }, [client, roomId]);

  useEffect(() => {
    if (isAtBottom.current) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [newMessages]);

  return (
    <MessagesContainer onScroll={handleScroll} ref={containerRef}>
      {allMessages.map((msg, index) => (
        <ChatMessageCard key={index} {...msg} />
      ))}
      <div ref={scrollRef} />
    </MessagesContainer>
  );
};

export default ChatMessages;
