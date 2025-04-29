import { AiFillCheckCircle } from "react-icons/ai";
import { InputWrapper, Label, Message, StyledInput } from "./style";

const Input = () => {
  return (
    <InputWrapper>
      <Label>Email Address</Label>
      <StyledInput>
        <input type="email" />
        <AiFillCheckCircle />
      </StyledInput>
      <Message>이메일 형식이 아닙니다</Message>
    </InputWrapper>
  );
};

export default Input;
