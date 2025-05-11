import { useProjectInfo } from "@/query/project/useProjectInfo";
import { useEffect, useState } from "react";
import { BiCheck, BiEditAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { StyledButton, StyledTextarea, Wrapper } from "./style";
import { useUpdateDescription } from "@/query/project/useUpdateDescription";

const Description = () => {
  const { projectId } = useParams();
  const project_id = Number(projectId);

  const { data, isLoading, error } = useProjectInfo(project_id);
  const [isEditable, setIsEditable] = useState(false);
  const [description, setDescription] = useState("");

  const mutation = useUpdateDescription();

  const handleEdit = () => {
    if (isEditable) {
      mutation.mutate(
        { project_id, description },
        {
          onSuccess: () => {
            console.log("수정 완료");
          },
          onError: (err) => {
            console.error("수정 실패", err);
          },
        }
      );
    }
    setIsEditable((prev) => !prev);
  };

  useEffect(() => {
    if (data?.description) {
      setDescription(data.description);
    }
  }, [data]);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생</p>;

  return (
    <Wrapper>
      <StyledTextarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        readOnly={!isEditable}
        rows={3}
      />
      <StyledButton onClick={handleEdit}>
        {isEditable ? <BiCheck /> : <BiEditAlt />}
      </StyledButton>
    </Wrapper>
  );
};

export default Description;
