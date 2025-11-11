import { NavItem, NavWrapper } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const tabs = [
  { label: "인원", path: "team" },
  { label: "게시판", path: "board" },
  { label: "일정", path: "task" },
  { label: "채팅", path: "chat" },
  { label: "회의", path: "meet" },
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
    } else {
      setActiveTab("");
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
