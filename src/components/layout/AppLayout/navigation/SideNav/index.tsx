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
        <NavItem>
          <IconLabel
            type="image"
            icon="https://pixabay.com/get/gdb9dac014b96dd4536b66321cf1f133c9fe1be67c2b812743fae17b8fe1c5886e8ce622f72a0ca9e49f8b88695b0c1e6413aa0cbfbc4209ef3d0a0302b5907f70d25e4fe8d5a05c3cf6ed28514bd8730_640.jpg"
          >
            we:up
          </IconLabel>
        </NavItem>
        <NavItem>
          <IconLabel
            type="image"
            icon="https://pixabay.com/get/gdb9dac014b96dd4536b66321cf1f133c9fe1be67c2b812743fae17b8fe1c5886e8ce622f72a0ca9e49f8b88695b0c1e6413aa0cbfbc4209ef3d0a0302b5907f70d25e4fe8d5a05c3cf6ed28514bd8730_640.jpg"
          >
            Quiz? Up!
          </IconLabel>
        </NavItem>
        <NavItem>
          <IconLabel
            type="image"
            icon="https://pixabay.com/get/gdb9dac014b96dd4536b66321cf1f133c9fe1be67c2b812743fae17b8fe1c5886e8ce622f72a0ca9e49f8b88695b0c1e6413aa0cbfbc4209ef3d0a0302b5907f70d25e4fe8d5a05c3cf6ed28514bd8730_640.jpg"
          >
            Rumon
          </IconLabel>
        </NavItem>
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
