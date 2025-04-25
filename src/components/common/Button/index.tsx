import { StyledButton } from "./style";
import { ButtonProps } from "./types";

const Button = ({
  children,
  variant = "primary",
  size = "sm",
  disabled = false,
  loading = false,
  fullWidth = false,
  iconOnly = false,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      iconOnly={iconOnly}
      onClick={onClick}
    >
      {loading ? "로딩중" : children}
    </StyledButton>
  );
};

export default Button;
