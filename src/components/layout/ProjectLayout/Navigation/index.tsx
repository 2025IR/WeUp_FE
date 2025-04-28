import { NavItem, NavWrapper } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const tabs = [
  { label: "Home", path: "home" },
  { label: "Task", path: "task" },
  { label: "Team", path: "team" },
  { label: "Board", path: "board" },
  { label: "Meet", path: "meet" },
];

const ProjectNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    const matchedTab = tabs.find((tab) => tab.path === currentPath);
    if (matchedTab) {
      setActiveTab(matchedTab.path);
    }
  }, [location.pathname]);

  const handleClick = (path: string) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <NavWrapper>
      {tabs.map(({ label, path }) => (
        <NavItem
          key={path}
          onClick={() => handleClick(path)}
          active={activeTab === path}
        >
          {label}
        </NavItem>
      ))}
    </NavWrapper>
  );
};

export default ProjectNav;
