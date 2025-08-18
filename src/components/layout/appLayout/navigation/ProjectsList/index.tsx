import { useProjectList } from "@/query/project/useProjectList";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProject } from "@/store/project";
import { ProjectType } from "@/types/project";
import ProjectItem from "../ProjectItem";

const ProjectsList = () => {
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
    <>
      {projects
        // 현재 진행중인 프로젝트만 출력
        ?.filter((p) => p.status === true)
        .map((project) => (
          <ProjectItem
            key={project.projectId}
            onClick={() => handleItemClick(project)}
            active={currentProjectId === String(project.projectId)}
            project={project}
          />
        ))}
    </>
  );
};

export default ProjectsList;
