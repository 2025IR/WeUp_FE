export interface InputProps {
  value?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "code";
  rightType?: "icon" | "button";
  status?: "normal" | "success" | "error";
  message?: string;
  label?: string;
  isButton?: string;
  readOnly?: boolean;
  onButtonClick?: () => void;
  onChange?: (value: string) => void;
}
