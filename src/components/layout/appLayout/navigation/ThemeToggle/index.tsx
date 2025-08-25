import { NavItem, StyledToggle, ToggleWrapper } from "./style";
import IconLabel from "@/components/common/IconLabel";
import { useTheme } from "@/contexts/ThemeContext";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

type Props = { collapsed: boolean };
const ThemeToggle = ({ collapsed }: Props) => {
  const { theme, toggleTheme } = useTheme();

  if (collapsed) {
    return (
      <NavItem collapsed={collapsed} onClick={toggleTheme}>
        <IconLabel icon={theme === "light" ? <AiFillSun /> : <AiFillMoon />}>
          ""
        </IconLabel>
      </NavItem>
    );
  }

  return (
    <ToggleWrapper>
      <IconLabel icon={theme === "light" ? <AiFillSun /> : <AiFillMoon />}>
        <StyledToggle checked={theme === "dark"} onClick={toggleTheme}>
          <div />
        </StyledToggle>
      </IconLabel>
    </ToggleWrapper>
  );
};

export default ThemeToggle;
