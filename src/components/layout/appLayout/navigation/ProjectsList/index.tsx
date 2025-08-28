import { Container } from "./style";
import { useProjectList } from "@/query/project/useProjectList";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProject } from "@/store/project";
import { ProjectType } from "@/types/project";
import ProjectItem from "../ProjectItem";

type Props = { collapsed: boolean };
const ProjectsList = ({ collapsed }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentProjectId = location.pathname.split("/")[2];

  const { data: projects } = useProjectList();

  const handleItemClick = (project: ProjectType) => {
    dispatch(
      setProject({
        id: project.projectId,
        projectName: project.projectName,
        projectImage: project.projectImage,
      })
    );
    navigate(`/project/${project.projectId}/home`);
  };

  return (
    <Container>
      {projects?.map((project) => (
        <ProjectItem
          key={project.projectId}
          onClick={() => handleItemClick(project)}
          active={currentProjectId === String(project.projectId)}
          collapsed={collapsed}
          project={project}
        />
      ))}
    </Container>
  );
};

export default ProjectsList;
