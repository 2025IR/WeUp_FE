import IconLabel from "@/components/common/IconLabel";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import {
  Container,
  NavItem,
  NavTitle,
  NavWrapper,
  ProjectWrapper,
  ToggleItem,
} from "./style";
import ProjectsList from "../ProjectsList";
import ThemeToggle from "../ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "@/query/auth/useLogout";

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  const { mutate: logout } = useLogout();
  const isActive = (keyword: string) => path.includes(keyword);

  return (
    <Container>
      <NavWrapper>
        <NavTitle>General</NavTitle>
        <NavItem>
          <IconLabel icon={<HiHome />}>Home</IconLabel>
        </NavItem>
        <NavItem
          active={isActive("/projects")}
          onClick={() => navigate("/projects")}
        >
          <IconLabel icon={<MdDashboard />}>Projects</IconLabel>
        </NavItem>
      </NavWrapper>
      <ProjectWrapper>
        {/* 프로젝트 리스트 컴포넌트 */}
        <NavTitle>Projects</NavTitle>
        <ProjectsList />
      </ProjectWrapper>
      <NavWrapper>
        <ToggleItem>
          {/* 테마 토클 컴포넌트 */}
          <ThemeToggle />
        </ToggleItem>
        <NavItem>
          <IconLabel icon={<IoMdSettings />}>Setting</IconLabel>
        </NavItem>
        <NavItem onClick={() => logout}>
          <IconLabel icon={<HiOutlineLogout />}>Logout</IconLabel>
        </NavItem>
      </NavWrapper>
    </Container>
  );
};

export default SideNav;
