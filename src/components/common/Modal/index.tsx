import { AiOutlineClose } from "react-icons/ai";
import { ModalProps } from "./type";
import Button from "../Button";
import { Background, Container, Header, IconWrapper, StyledHr } from "./style";

const Modal = ({
  icon,
  title,
  buttonText,
  onClick,
  children,
  type = "default",
  onClose,
}: ModalProps) => {
  return (
    <Background>
      <Container type={type}>
        <Header>
          <div>
            <IconWrapper>{icon}</IconWrapper>
            <h3>{title}</h3>
          </div>
          <Button onClick={onClose} variant="secondary" iconOnly>
            <AiOutlineClose />
          </Button>
        </Header>

        {children}

        {type === "form" ? (
          <>
            <StyledHr />
            <Button onClick={onClick} variant="primary" size="lg" fullWidth>
              {buttonText}
            </Button>
          </>
        ) : (
          <div>
            <Button onClick={onClose} variant="secondary" size="lg" fullWidth>
              취소
            </Button>
            <Button onClick={onClick} size="lg" fullWidth>
              {buttonText}
            </Button>
          </div>
        )}
      </Container>
    </Background>
  );
};

export default Modal;
