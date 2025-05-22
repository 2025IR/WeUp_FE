import ChatMessageCard from "../ChatMessageCard";
import { MessagesContainer } from "./style";

const MockMessages = [
  {
    id: 1,
    name: "최승희",
    senderMe: false,
    text: "안녕하세요!",
    time: "오후 1:02",
    profile: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
    isImage: false,
  },
  {
    id: 2,
    name: "정태현현",
    senderMe: false,
    text: "안녕하세요 질문이 있어요.안녕하세요~~여기서 좀만더 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~넘어가면~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~",
    time: "오후 1:03",
    profile: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
    isImage: false,
  },
  {
    id: 3,
    senderMe: true,
    name: "정윤석",
    text: "질문이 있어요.안녕하세요~~~~~~~~~~~~~~~~~~~~~~~~여기서 좀만더  넘어가면~~~~~~~~~~~~",
    time: "오후 1:04",
    profile: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
    isImage: false,
  },
  {
    id: 4,
    senderMe: false,
    name: "홍승혁",
    text: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley2.png",
    time: "오후 1:04",
    profile: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
    isImage: true,
  },
  {
    id: 5,
    senderMe: true,
    name: "정윤석",
    text: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley3.png",
    time: "오후 1:04",
    profile: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
    isImage: true,
  },
  {
    id: 6,
    name: "최승희",
    senderMe: false,
    text: "안녕하세요!",
    time: "오후 1:02",
    profile: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
    isImage: false,
  },
];

const ChatMessages = () => {
  return (
    <MessagesContainer>
      {MockMessages.map((msg) => (
        <ChatMessageCard
          key={msg.id}
          name={msg.name}
          senderMe={msg.senderMe}
          text={msg.text}
          time={msg.time}
          profile={msg.profile}
          isImage={msg.isImage}
        />
      ))}
    </MessagesContainer>
  );
};

export default ChatMessages;
