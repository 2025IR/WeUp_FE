export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "lg";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  iconOnly?: boolean;
  onClick?: () => void;
}
