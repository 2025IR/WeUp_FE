import IconLabel from "@/components/common/IconLabel";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import {
  Container,
  NavButton,
  NavItem,
  NavTitle,
  NavWrapper,
  ProjectWrapper,
} from "./style";
import ProjectsList from "../ProjectsList";
import ThemeToggle from "../ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "@/query/auth/useLogout";
import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";
import { useState } from "react";

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const { mutate: logout } = useLogout();
  const isActive = (keyword: string) => path.includes(keyword);

  const handleLogout = () => {
    logout();
  };

  return (
    <Container collapsed={collapsed}>
      <NavWrapper>
        <NavTitle collapsed={collapsed}>메뉴</NavTitle>
        {/* <NavItem collapsed={collapsed}>
          <IconLabel icon={<HiHome />}>Home</IconLabel>
        </NavItem> */}
        <NavItem
          active={isActive("/projects")}
          collapsed={collapsed}
          onClick={() => navigate("/projects")}
        >
          <IconLabel icon={<HiHome />}>홈</IconLabel>
        </NavItem>
        <NavButton
          onClick={() => setCollapsed(!collapsed)}
          collapsed={collapsed}
        >
          {collapsed ? <CgChevronDoubleRight /> : <CgChevronDoubleLeft />}
        </NavButton>
      </NavWrapper>
      <ProjectWrapper collapsed={collapsed}>
        {/* 프로젝트 리스트 컴포넌트 */}
        <NavTitle collapsed={collapsed}>프로젝트</NavTitle>
        <ProjectsList collapsed={collapsed} />
      </ProjectWrapper>
      <NavWrapper>
        <ThemeToggle collapsed={collapsed} />
        {/* <NavItem collapsed={collapsed}>
          <IconLabel icon={<IoMdSettings />}>Setting</IconLabel>
        </NavItem> */}
        <NavItem onClick={handleLogout} collapsed={collapsed}>
          <IconLabel icon={<HiOutlineLogout />}>로그아웃</IconLabel>
        </NavItem>
      </NavWrapper>
    </Container>
  );
};

export default SideNav;
