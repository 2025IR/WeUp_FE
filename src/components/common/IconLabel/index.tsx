import { IconLabelProps } from "./type";

const IconLabel = ({
  type,
  icon,
  size,
  fontSize,
  gap = "1rem",
  full = false,
  text,
}: IconLabelProps) => {
  return (
    <div type={type} gap={gap} size={size} fontSize={fontSize} full={full}>
      {type === "image" ? <img src={icon as string} /> : icon}
      <p>{text}</p>
    </div>
  );
};

export default IconLabel;
