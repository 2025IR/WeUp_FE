import { Wrapper } from "./style";
import { IconLabelProps } from "./type";

const IconLabel = ({
  children,
  type = "icon",
  icon,
  size = "md",
  colors = "textLight",
  fontSize = "small",
  fontWeight = "medium",
  gap = "1rem",
  full = false,
  onClick,
}: IconLabelProps) => {
  return (
    <Wrapper
      type={type}
      gap={gap}
      size={size}
      colors={colors}
      fontSize={fontSize}
      fontWeight={fontWeight}
      full={full}
      onClick={onClick}
    >
      {type === "image" ? <img src={icon as string} /> : icon}
      <div>{children}</div>
    </Wrapper>
  );
};

export default IconLabel;
