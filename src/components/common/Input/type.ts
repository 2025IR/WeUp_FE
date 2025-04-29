export interface InputProps {
  type?: "text" | "email" | "password" | "number";
  rightType?: "icon" | "button";
  status?: "normal" | "success" | "error";
  message?: string;
  label?: string;
  isButton?: string;
  onButtonClick?: () => void;
  onChange?: (value: string) => void;
}
