import IconLabel from "@/components/common/IconLabel";
import { AiFillSun } from "react-icons/ai";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import {
  Container,
  NavItem,
  NavTitle,
  NavWrapper,
  ProjectWrapper,
} from "./style";
import ProjectsList from "../ProjectsList";

const SideNav = () => {
  return (
    <Container>
      <NavWrapper>
        <NavTitle>General</NavTitle>
        <NavItem>
          <IconLabel icon={<HiHome />}>Home</IconLabel>
        </NavItem>
        <NavItem>
          <IconLabel icon={<MdDashboard />}>Projects</IconLabel>
        </NavItem>
      </NavWrapper>
      <ProjectWrapper>
        {/* 프로젝트 리스트 */}
        <NavTitle>Projects</NavTitle>
        <ProjectsList />
      </ProjectWrapper>
      <NavWrapper>
        <IconLabel icon={<AiFillSun />}>toggle</IconLabel>
        <NavItem>
          <IconLabel icon={<IoMdSettings />}>Setting</IconLabel>
        </NavItem>
        <NavItem>
          <IconLabel icon={<HiOutlineLogout />}>Logout</IconLabel>
        </NavItem>
      </NavWrapper>
    </Container>
  );
};

export default SideNav;
