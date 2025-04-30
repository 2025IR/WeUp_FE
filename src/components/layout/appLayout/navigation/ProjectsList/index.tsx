import IconLabel from "@/components/common/IconLabel";
import { NavItem } from "../SideNav/style";

const mockProjects = [
  {
    id: 1,
    name: "we:up",
    icon: "https://pixabay.com/get/gdb9dac014b96dd4536b66321cf1f133c9fe1be67c2b812743fae17b8fe1c5886e8ce622f72a0ca9e49f8b88695b0c1e6413aa0cbfbc4209ef3d0a0302b5907f70d25e4fe8d5a05c3cf6ed28514bd8730_640.jpg",
  },
  {
    id: 2,
    name: "Quiz? Up!",
    icon: "https://pixabay.com/get/gdb9dac014b96dd4536b66321cf1f133c9fe1be67c2b812743fae17b8fe1c5886e8ce622f72a0ca9e49f8b88695b0c1e6413aa0cbfbc4209ef3d0a0302b5907f70d25e4fe8d5a05c3cf6ed28514bd8730_640.jpg",
  },
  {
    id: 3,
    name: "Rumon",
    icon: "https://pixabay.com/get/gdb9dac014b96dd4536b66321cf1f133c9fe1be67c2b812743fae17b8fe1c5886e8ce622f72a0ca9e49f8b88695b0c1e6413aa0cbfbc4209ef3d0a0302b5907f70d25e4fe8d5a05c3cf6ed28514bd8730_640.jpg",
  },
];

const ProjectsList = () => {
  return (
    <>
      {mockProjects.map((project) => (
        <NavItem key={project.id}>
          <IconLabel type="image" icon={project.icon}>
            {project.name}
          </IconLabel>
        </NavItem>
      ))}
    </>
  );
};

export default ProjectsList;
