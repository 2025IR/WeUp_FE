// style.ts
export interface IconLabelStyledProps {
  type: "image" | "icon";
  size: "sm" | "md" | "lg";
  colors: "text" | "textLight";
  fontSize: "caption" | "small" | "body";
  fontWeight: "medium" | "semibold" | "bold";
  gap: string;
  full: boolean;
}

// component.tsx
export interface IconLabelProps extends Partial<IconLabelStyledProps> {
  children: React.ReactNode;
  icon: string | React.ReactNode;
}
