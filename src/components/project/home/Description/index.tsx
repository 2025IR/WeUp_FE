import { useProjectInfo } from "@/query/project/useProjectInfo";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { StyledButton, StyledTextarea, Wrapper } from "./style";

const Description = () => {
  const { projectId } = useParams();
  const project_id = Number(projectId);

  const { data, isLoading, error } = useProjectInfo(project_id);
  const [isEditable, setIsEditable] = useState(false);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <Wrapper>
      <StyledTextarea
        value={data.description}
        readOnly={!isEditable}
        rows={3}
      />
      <StyledButton>
        <BiEditAlt />
      </StyledButton>
    </Wrapper>
  );
};

export default Description;
