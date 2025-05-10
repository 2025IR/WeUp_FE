import IconLabel from "@/components/common/IconLabel";
import Label from "@/components/common/Label";
import { IoMdSettings } from "react-icons/io";
import { Container, InfoSection, LabelSection, TabSection } from "./style";
import ProjectNav from "../Navigation";

export const mockProject = {
  projectName: "Rumon",
  projectImage:
    "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png",
  description: "생성형 AI를 이용한 게이미케이션 투두 앱",
};

const ProjectHeader = () => {
  return (
    <Container>
      <img src={mockProject.projectImage} alt="project image" />
      <TabSection>
        <InfoSection>
          <h1>{mockProject.projectName}</h1>
          <LabelSection>
            <Label>진행중</Label>
            <Label colors="secondary">
              <IconLabel
                icon={<IoMdSettings />}
                gap="2px"
                size="sm"
                fontSize="caption"
              >
                Setting
              </IconLabel>
            </Label>
          </LabelSection>
        </InfoSection>
        <ProjectNav />
      </TabSection>
    </Container>
  );
};

export default ProjectHeader;
