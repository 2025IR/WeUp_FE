import IconLabel from "@/components/common/IconLabel";
import { NavItem } from "./style";
import { useProjectList } from "@/query/project/useProjectList";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProject } from "@/store/project";

type Props = { collapsed: boolean };
const ProjectsList = ({ collapsed }: Props) => {
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
                projectName: project.projectName,
                projectImage: project.projectImage,
              })
            );
            navigate(`/project/${project.projectId}/home`);
          }}
          active={currentProjectId === String(project.projectId)}
          collapsed={collapsed}
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
