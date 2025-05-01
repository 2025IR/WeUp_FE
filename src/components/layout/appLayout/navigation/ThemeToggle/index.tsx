import { StyledToggle } from "./style";
import IconLabel from "@/components/common/IconLabel";
import { useTheme } from "@/contexts/ThemeContext";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconLabel icon={theme === "light" ? <AiFillSun /> : <AiFillMoon />}>
      <StyledToggle checked={theme === "dark"} onClick={toggleTheme}>
        <div />
      </StyledToggle>
    </IconLabel>
  );
};

export default ThemeToggle;
