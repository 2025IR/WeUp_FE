import { Wrapper } from "./style";
import { IconLabelProps } from "./type";

const IconLabel = ({
  type = "icon",
  icon,
  size = "md",
  colors = "textLight",
  fontSize = "small",
  fontWeight = "medium",
  gap = "1rem",
  full = false,
  text,
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
    >
      {type === "image" ? <img src={icon as string} /> : icon}
      <p>{text}</p>
    </Wrapper>
  );
};

export default IconLabel;
