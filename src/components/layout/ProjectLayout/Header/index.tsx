import IconLabel from "@/components/common/IconLabel";
import Label from "@/components/common/Label";
import { IoMdSettings } from "react-icons/io";

export const mockProject = {
  projectName: "Rumon",
  projectImage:
    "https://cdn.pixabay.com/photo/2021/10/10/10/11/cat-6696864_1280.png",
  description: "생성형 AI를 이용한 게이미케이션 투두 앱",
};

const ProjectHeader = () => {
  return (
    <div>
      <div>
        <img src={mockProject.projectImage} alt="project image" />
        <h1>{mockProject.projectName}</h1>
        <div>
          <Label>진행중</Label>
          <Label>
            <IconLabel icon={<IoMdSettings />}>Setting</IconLabel>
          </Label>
        </div>
      </div>
      <div>{/* 네비게이션 컴포넌트트 */}</div>
    </div>
  );
};

export default ProjectHeader;
