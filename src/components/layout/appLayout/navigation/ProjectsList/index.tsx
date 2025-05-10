import IconLabel from "@/components/common/IconLabel";
import { NavItem } from "../SideNav/style";

const mockProjects = [
  {
    id: 1,
    name: "we:up",
    icon: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
  },
  {
    id: 2,
    name: "Quiz? Up!",
    icon: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
  },
  {
    id: 3,
    name: "Rumon",
    icon: "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
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
