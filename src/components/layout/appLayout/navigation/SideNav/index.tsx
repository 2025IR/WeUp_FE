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

  console.log(collapsed);

  const { mutate: logout } = useLogout();
  const isActive = (keyword: string) => path.includes(keyword);

  return (
    <Container collapsed={collapsed}>
      <NavWrapper>
        <NavTitle collapsed={collapsed}>General</NavTitle>
        {/* <NavItem collapsed={collapsed}>
          <IconLabel icon={<HiHome />}>Home</IconLabel>
        </NavItem> */}
        <NavItem
          active={isActive("/projects")}
          collapsed={collapsed}
          onClick={() => navigate("/projects")}
        >
          <IconLabel icon={<HiHome />}>Projects</IconLabel>
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
        <NavTitle collapsed={collapsed}>Projects</NavTitle>
        <ProjectsList collapsed={collapsed} />
      </ProjectWrapper>
      <NavWrapper>
        <ThemeToggle collapsed={collapsed} />
        {/* <NavItem collapsed={collapsed}>
          <IconLabel icon={<IoMdSettings />}>Setting</IconLabel>
        </NavItem> */}
        <NavItem onClick={() => logout()} collapsed={collapsed}>
          <IconLabel icon={<HiOutlineLogout />}>Logout</IconLabel>
        </NavItem>
      </NavWrapper>
    </Container>
  );
};

export default SideNav;
