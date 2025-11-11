import IconLabel from "@/components/common/IconLabel";
import Label from "@/components/common/Label";
import { IoMdSettings } from "react-icons/io";
import { Container, InfoSection, LabelSection, TabSection } from "./style";
import ProjectNav from "../Navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";
import ProjectEditModal from "../ProjectEditModal";
import { useNavigate } from "react-router-dom";

const ProjectHeader = () => {
  const projectId = useSelector((state: RootState) => state.project.id);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projectName, projectImage } = useSelector(
    (state: RootState) => state.project
  );

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  const handleClickHome = () => {
    navigate(`/project/${projectId}/home`);
  };

  return (
    <Container>
      <img src={projectImage} alt="project image" onClick={handleClickHome} />
      <TabSection>
        <InfoSection>
          <h1 onClick={handleClickHome}>{projectName}</h1>
          <LabelSection>
            <Label>진행중</Label>
            <Label colors="secondary">
              <IconLabel
                icon={<IoMdSettings />}
                gap="2px"
                size="sm"
                fontSize="caption"
                onClick={handleOpen}
              >
                설정
              </IconLabel>
            </Label>
          </LabelSection>
        </InfoSection>
        <ProjectNav />
      </TabSection>

      <ProjectEditModal isOpen={isModalOpen} onClose={handleClose} />
    </Container>
  );
};

export default ProjectHeader;
