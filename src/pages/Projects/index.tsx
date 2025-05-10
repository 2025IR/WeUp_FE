import ProjectCard from "@/components/projects/ProjectCard";
import { Container, Header, Main, ModalContainer, UploadButton } from "./style";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import { AiFillFolderAdd, AiOutlineUpload } from "react-icons/ai";
import Input from "@/components/common/Input";
import IconLabel from "@/components/common/IconLabel";
import { useProjectList } from "@/query/project/useProjectList";

const Projects = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: projects, isLoading, isError } = useProjectList();

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleModalClick = () => {};

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
              people={project.people}
              last_access_time={project.last_access_time}
              onClick={() => navigate(`/project/${project.projectId}`)}
            />
          ))}
      </Main>

      {isModalOpen && (
        <Modal
          type="form"
          onClick={handleModalClick}
          onClose={handleClose}
          buttonText="Create project"
          icon={<AiFillFolderAdd />}
          title="New Project"
        >
          <ModalContainer>
            <img
              src="https://pixabay.com/get/gd18b5061c19770af1bbd98ff5f270e14287f99abedbbb2f40f7da254c6ffffede7381e165b8c0c5a31ff8b13f62fb279b815dcaed0017039c8939cb3d680f9ee73f2c2dc54073dc1fd4657769d3a74fb_640.jpg"
              alt="project profile priview"
            />
            <div>
              <Input label="Project Name:" />
              <UploadButton>
                <IconLabel
                  icon={<AiOutlineUpload />}
                  gap="0.375rem"
                  colors="textLight"
                >
                  Upload Image
                </IconLabel>
              </UploadButton>
            </div>
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
};

export default Projects;
