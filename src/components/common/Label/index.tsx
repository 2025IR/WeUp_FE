import { StyledLabel } from "./style";
import { LabelProps } from "./type";

const Label = ({
  children,
  colors = "primary",
  textColors = "textWhite",
}: LabelProps) => {
  return (
    <StyledLabel colors={colors} textColors={textColors}>
      {children}
    </StyledLabel>
  );
};

export default Label;
