import { StyledLabel } from "./style";
import { LabelProps } from "./type";

const Label = ({
  children,
  colors = "primary",
  textColors = "textWhite",
  onClick,
}: LabelProps) => {
  return (
    <StyledLabel colors={colors} textColors={textColors} onClick={onClick}>
      {children}
    </StyledLabel>
  );
};

export default Label;
