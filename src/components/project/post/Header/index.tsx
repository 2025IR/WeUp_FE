import Button from "@/components/common/Button";
import { BiArrowBack } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import { ButtonWrapper, HeaderWrapper, LeftSection } from "./style";

const PostHeader = ({ postTitle }: { postTitle: string }) => {
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
        <Button variant="secondary">삭제</Button>
        <Button>수정</Button>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default PostHeader;
