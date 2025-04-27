export interface ButtonStyledPorps {
  variant: "primary" | "secondary" | "danger";
  size: "sm" | "lg";
  fullWidth: boolean;
  disabled: boolean;
  iconOnly: boolean;
}

export interface ButtonProps extends Partial<ButtonStyledPorps> {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
}
