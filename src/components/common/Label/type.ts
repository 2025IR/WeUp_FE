export interface LabelStyledProps {
  colors?: string;
  textColors: "text" | "textLight" | "textWhite";
  onClick?: () => void;
}

export interface LabelProps extends Partial<LabelStyledProps> {
  children: React.ReactNode;
}
