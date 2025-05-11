import IconLabel from "@/components/common/IconLabel";
import { NavItem } from ".//style";
import { useProjectList } from "@/query/project/useProjectList";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProject } from "@/store/project";

const ProjectsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentProjectId = location.pathname.split("/")[2];

  const { data: projects } = useProjectList();
  return (
    <>
      {projects?.map((project) => (
        <NavItem
          key={project.projectId}
          onClick={() => {
            dispatch(
              setProject({
                id: project.projectId,
                name: project.projectName,
                image: project.projectImage,
              })
            );
            navigate(`/project/${project.projectId}/home`);
          }}
          active={currentProjectId === String(project.projectId)}
        >
          <IconLabel type="image" icon={project.projectImage}>
            {project.projectName}
          </IconLabel>
        </NavItem>
      ))}
    </>
  );
};

export default ProjectsList;
