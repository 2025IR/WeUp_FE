export interface IconLabelProps {
  type: "image" | "icon";
  icon: string | React.ReactNode;
  size: "sm" | "md" | "lg";
  colors: "text" | "textLight";
  fontSize: "caption" | "small" | "body";
  fontWeight: "medium" | "semibold" | "bold";
  gap?: string;
  full?: boolean;
  text: string;
}
