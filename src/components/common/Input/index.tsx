import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidErrorCircle } from "react-icons/bi";
import { InputProps } from "./type";
import { Content, InputWrapper, Label, Message, StyledInput } from "./style";
import {
  validateEmail,
  validatePassword,
  validateName,
  validatePhoneNumber,
  validateCode,
} from "./validate";
import Button from "../Button";

const Input = ({
  type = "text",
  value = "",
  status = "normal",
  message,
  label,
  isButton,
  readOnly = false,
  onButtonClick,
  onChange,
}: InputProps) => {
  const [internalValue, setInternalValue] = useState("");
  const [inputStatus, setInputStatus] = useState<
    "normal" | "success" | "error"
  >(status);
  const [innerMessage, setInnerMessage] = useState("");

  useEffect(() => {
    setInternalValue(value);
    setInputStatus(status);
    if (message) setInnerMessage(message);
  }, [status, message, value]);

  useEffect(() => {
    if (internalValue === "") {
      setInputStatus("normal");
      setInnerMessage("");
      return;
    }

    switch (type) {
      case "email":
        if (validateEmail(internalValue)) {
          setInputStatus("success");
          setInnerMessage("");
        } else {
          setInputStatus("error");
          setInnerMessage("올바른 이메일 형식을 입력하세요.");
        }
        break;

      case "password":
        if (validatePassword(internalValue)) {
          setInputStatus("success");
          setInnerMessage("");
        } else {
          setInputStatus("error");
          setInnerMessage("비밀번호 조건을 확인하세요.");
        }
        break;

      case "text":
        if (validateName(internalValue)) {
          setInputStatus("success");
          setInnerMessage("");
        } else {
          setInputStatus("error");
          setInnerMessage("이름은 2~20자여야 합니다.");
        }
        break;

      case "tel":
        if (validatePhoneNumber(internalValue)) {
          setInputStatus("success");
          setInnerMessage("");
        } else {
          setInputStatus("error");
          setInnerMessage("올바른 전화번호를 입력해주세요");
        }
        break;

      case "code":
        if (validateCode(internalValue)) {
          setInputStatus("success");
          setInnerMessage("");
        } else {
          setInputStatus("error");
          setInnerMessage("6자리 숫자를 입력해주세요");
        }
        break;

      default:
        break;
    }
  }, [internalValue]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <Content>
        <StyledInput status={inputStatus}>
          <input
            type={type}
            value={internalValue}
            maxLength={30}
            onChange={handleChange}
            readOnly={readOnly}
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
