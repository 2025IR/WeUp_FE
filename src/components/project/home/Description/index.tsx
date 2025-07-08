import { useProjectInfo } from "@/query/project/useProjectInfo";
import { useEffect, useState } from "react";
import { BiCheck, BiEditAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { StyledButton, StyledTextarea, Wrapper } from "./style";
import { useUpdateDescription } from "@/query/project/useUpdateDescription";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "@/store/project";
import { RootState } from "@/store/store";

const Description = () => {
  const { projectId } = useParams();
  const project_id = Number(projectId);

  const { data } = useProjectInfo(project_id);

  const dispatch = useDispatch();
  const project = useSelector((state: RootState) => state.project);

  const [isEditable, setIsEditable] = useState(false);
  const [description, setDescription] = useState("");

  const mutation = useUpdateDescription();

  const handleEdit = () => {
    if (isEditable) {
      mutation.mutate(
        { project_id, description },
        {
          onSuccess: () => {
            dispatch(setProject({ ...project, description }));
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

  return (
    <Wrapper isFill={isEditable}>
      <StyledTextarea
        value={description}
        onChange={(e) => {
          const lines = e.target.value.split("\n");
          if (lines.length <= 3) setDescription(e.target.value);
        }}
        readOnly={!isEditable}
        rows={3}
      />
      <StyledButton onClick={handleEdit}>
        {isEditable ? <BiCheck /> : <BiEditAlt className="edit_icon" />}
      </StyledButton>
    </Wrapper>
  );
};

export default Description;
