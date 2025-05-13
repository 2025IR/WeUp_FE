import IconLabel from "@/components/common/IconLabel";
import Label from "@/components/common/Label";
import { IoMdSettings } from "react-icons/io";
import { Container, InfoSection, LabelSection, TabSection } from "./style";
import ProjectNav from "../Navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";
import ProjectEditModal from "../ProjectEditModal";

const ProjectHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, image } = useSelector((state: RootState) => state.project);

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);

  return (
    <Container>
      <img src={image} alt="project image" />
      <TabSection>
        <InfoSection>
          <h1>{name}</h1>
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
                Setting
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
