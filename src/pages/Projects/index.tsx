import ProjectCard from "@/components/projects/ProjectCard";
import { Container, Header, Main, ModalContainer, UploadButton } from "./style";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import { AiFillFolderAdd, AiOutlineUpload } from "react-icons/ai";
import Input from "@/components/common/Input";
import IconLabel from "@/components/common/IconLabel";

const mockProjects = [
  {
    id: 1,
    name: "we:up",
    icon: "https://pixabay.com/get/g3a1b25860db65885f2771a1c5dc6b9a52a4a313f6b9fd70e961b262e8a1e497b2b0bdc09eb73dccbd9f8a58a5e660f37d2d6d43dea603f5d3c2c2e534f3345f261178491d09572b09b964b46b6d23143_640.jpg",
    people: 3,
    last_access_time: 7,
  },
  {
    id: 2,
    name: "Quiz? Up!",
    icon: "https://pixabay.com/get/g3a1b25860db65885f2771a1c5dc6b9a52a4a313f6b9fd70e961b262e8a1e497b2b0bdc09eb73dccbd9f8a58a5e660f37d2d6d43dea603f5d3c2c2e534f3345f261178491d09572b09b964b46b6d23143_640.jpg",
    people: 4,
    last_access_time: 4,
  },
  {
    id: 3,
    name: "Rumon",
    icon: "https://pixabay.com/get/g3a1b25860db65885f2771a1c5dc6b9a52a4a313f6b9fd70e961b262e8a1e497b2b0bdc09eb73dccbd9f8a58a5e660f37d2d6d43dea603f5d3c2c2e534f3345f261178491d09572b09b964b46b6d23143_640.jpg",
    people: 2,
    last_access_time: 3,
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {mockProjects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            onClick={() => navigate(`/project/${project.id}`)}
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
