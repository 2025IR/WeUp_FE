import IconLabel from "@/components/common/IconLabel";
import Label from "@/components/common/Label";
import { IoMdSettings } from "react-icons/io";
import { Container, InfoSection, LabelSection, TabSection } from "./style";
import ProjectNav from "../Navigation";

export const mockProject = {
  projectName: "Rumon",
  projectImage:
    "https://pixabay.com/get/geca407ebc7c8a30811e4f7b6fca561a04a8556ee59e344a48132694985ff4d12120e36c9ac33e3734f2fd2286ad6d2f5bf528367bc8dd3206e778fe6fb2959c9f2e12ee52cd4e4a7ecd3837583aed750_640.jpg",
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
