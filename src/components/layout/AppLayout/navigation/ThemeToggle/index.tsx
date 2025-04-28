import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div onClick={toggleHandler}>
        <div />
      </div>
    </>
  );
};

export default ThemeToggle;
