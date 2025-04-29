import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidErrorCircle } from "react-icons/bi";
import { InputProps } from "./type";
import { Content, InputWrapper, Label, Message, StyledInput } from "./style";
import { validateEmail, validatePassword, validateName } from "./validate";
import Button from "../Button";

const Input = ({
  type = "text",
  status = "normal",
  message,
  label,
  isButton,
  onButtonClick,
  onChange,
}: InputProps) => {
  const [value, setValue] = useState("");
  const [inputStatus, setInputStatus] = useState<
    "normal" | "success" | "error"
  >(status);
  const [innerMessage, setInnerMessage] = useState("");

  useEffect(() => {
    setInputStatus(status);
    if (message) setInnerMessage(message);
  }, [status, message]);

  useEffect(() => {
    if (value === "") {
      setInputStatus("normal");
      setInnerMessage("");
      return;
    }

    switch (type) {
      case "email":
        if (validateEmail(value)) {
          setInputStatus("success");
          setInnerMessage("");
        } else {
          setInputStatus("error");
          setInnerMessage("올바른 이메일 형식을 입력하세요.");
        }
        break;

      case "password":
        if (validatePassword(value)) {
          setInputStatus("success");
          setInnerMessage("");
        } else {
          setInputStatus("error");
          setInnerMessage("비밀번호 조건을 확인하세요.");
        }
        break;

      case "text":
        if (validateName(value)) {
          setInputStatus("success");
          setInnerMessage("");
        } else {
          setInputStatus("error");
          setInnerMessage("이름은 2~20자여야 합니다.");
        }
        break;

      default:
        break;
    }
  }, [value]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <Content>
        <StyledInput status={inputStatus}>
          <input
            type={type}
            value={value}
            maxLength={30}
            onChange={handleChange}
          />

          {inputStatus === "success" ? (
            <AiFillCheckCircle />
          ) : inputStatus === "error" ? (
            <BiSolidErrorCircle />
          ) : null}
        </StyledInput>

        {isButton && (
          <Button variant="secondary" onClick={onButtonClick}>
            {isButton}
          </Button>
        )}
      </Content>

      {innerMessage && <Message>{innerMessage}</Message>}
    </InputWrapper>
  );
};

export default Input;
