import Button from "@/components/common/Button";
import { BsSendFill } from "react-icons/bs";
import { InputContainer, StyledInput } from "./style";

const ChatInput = () => {
  return (
    <InputContainer>
      <StyledInput type="text" placeholder="메시지 입력" />
      <Button iconOnly variant="primary" size="lg">
        <BsSendFill />
      </Button>
    </InputContainer>
  );
};

export default ChatInput;
