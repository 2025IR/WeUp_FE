import { useNavigate } from "react-router-dom";
import { NavItem, NavWrapper } from "./style";
import { useState } from "react";

const tabs = ["Home", "Task", "Team", "Board", "Meet"];

const ProjectNav = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    navigate(`${tab.toLowerCase()}`);
  };

  return (
    <NavWrapper>
      {tabs.map((tab) => (
        <NavItem
          key={tab}
          onClick={() => handleNavClick(tab)}
          active={activeTab === tab}
        >
          {tab}
        </NavItem>
      ))}
    </NavWrapper>
  );
};

export default ProjectNav;
