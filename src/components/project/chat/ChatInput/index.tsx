import Button from "@/components/common/Button";
import { BsSendFill } from "react-icons/bs";
import { InputContainer, StyledInput } from "./style";
import { useState } from "react";
import { ChatInputProps } from "./type";
import { ChatSendProps } from "@/types/chat";

const ChatInput = ({ roomId, senderId, client }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim() || !client || !client.connected) return;

    const payload: ChatSendProps = {
      senderId,
      message: input,
    };

    client.publish({
      destination: `/pub/chat/${roomId}`,
      body: JSON.stringify(payload),
    });

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder="메시지 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button iconOnly variant="primary" size="lg" onClick={handleSend}>
        <BsSendFill />
      </Button>
    </InputContainer>
  );
};

export default ChatInput;
