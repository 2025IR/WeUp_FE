export interface LabelStyledProps {
  colors: "primary" | "secondary";
  textColors: "text" | "textLight" | "textWhite";
}

export interface LabelProps extends Partial<LabelStyledProps> {
  children: React.ReactNode;
}
