import { useState } from "react";
import { StyledToggle } from "./style";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <StyledToggle checked={isDarkMode} onClick={toggleHandler}>
        <div />
      </StyledToggle>
    </>
  );
};

export default ThemeToggle;
