export interface IconLabelProps {
  type: "image" | "icon";
  icon: string | React.ReactNode;
  size: "sm" | "md" | "lg";
  fontSize: "caption" | "small" | "body";
  gap?: string;
  full?: boolean;
  text: string;
}
