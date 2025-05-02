import { AiOutlineClose } from "react-icons/ai";
import { ModalProps } from "./type";
import Button from "../Button";

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
    <div>
      <div>
        <div>
          <div>
            <div>
              {icon}
              <h3>{title}</h3>
            </div>
            <Button iconOnly onClick={onClose}>
              <AiOutlineClose />
            </Button>
          </div>

          {children}

          {type === "form" ? (
            <>
              <hr />
              <Button onClick={onClick}>{buttonText}</Button>
            </>
          ) : (
            <div>
              <Button onClick={onClose}>취소</Button>
              <Button onClick={onClick}>{buttonText}</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
