import { useState } from "react";
import { StyledToggle } from "./style";
import IconLabel from "@/components/common/IconLabel";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const icon = isDarkMode === false ? <AiFillSun /> : <AiFillMoon />;

  const toggleHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <IconLabel icon={icon}>
      <StyledToggle checked={isDarkMode} onClick={toggleHandler}>
        <div />
      </StyledToggle>
    </IconLabel>
  );
};

export default ThemeToggle;
