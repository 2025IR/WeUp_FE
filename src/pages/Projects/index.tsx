import ProjectCard from "@/components/projects/ProjectCard";
import { Container, Header, Main } from "./style";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProjectList } from "@/query/project/useProjectList";
import ProjectCreateModal from "@/components/projects/ProjectCreateModal";
import { useDispatch } from "react-redux";
import { setProject } from "@/store/project";

const Projects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: projects, isLoading, isError } = useProjectList();

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  return (
    <Container>
      <Header>
        <h1>Project</h1>
        <Button variant="secondary" onClick={handleOpen}>
          Add
        </Button>
      </Header>
      <Main>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading projects.</p>}
        {projects &&
          projects.map((project) => (
            <ProjectCard
              key={project.projectId}
              id={project.projectId}
              name={project.projectName}
              icon={project.projectImage}
              people={project.memberCount}
              project_created_time={project.projectCreatedTime}
              status={project.status}
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
            />
          ))}
      </Main>

      <ProjectCreateModal isOpen={isModalOpen} onClose={handleClose} />
    </Container>
  );
};

export default Projects;
