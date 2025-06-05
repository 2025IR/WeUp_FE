import Button from "@/components/common/Button";
import { BiArrowBack } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { ButtonWrapper, HeaderWrapper, LeftSection } from "./style";

const PostHeader = ({
  postTitle,
  onEdit,
  onDelete,
}: {
  postTitle: string;
  onEdit: () => void;
  onDelete: () => void;
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderWrapper>
      <LeftSection>
        <BiArrowBack onClick={handleBack} />
        <h1>{postTitle}</h1>
      </LeftSection>
      <ButtonWrapper>
        <Button variant="secondary" onClick={onDelete}>
          삭제
        </Button>
        <Button onClick={onEdit}>수정</Button>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default PostHeader;
