import ProjectCard from "@/components/projects/ProjectCard";
import { Container, Header, Main } from "./style";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProjectList } from "@/query/project/useProjectList";
import ProjectCreateModal from "@/components/projects/ProjectCreateModal";

const Projects = () => {
  const navigate = useNavigate();
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
