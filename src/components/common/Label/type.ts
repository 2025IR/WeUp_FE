export interface LabelStyledProps {
  colors: "primary" | "secondary";
  textColors: "text" | "textLight" | "textWhite";
  onClick?: () => void;
}

export interface LabelProps extends Partial<LabelStyledProps> {
  children: React.ReactNode;
}
