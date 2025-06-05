import Button from "@/components/common/Button";
import { BiArrowBack } from "react-icons/bi";
import { ButtonWrapper, HeaderWrapper, LeftSection } from "./style";
import { useNavigate } from "react-router-dom";

type Props = {
  onSubmit: () => void;
};

const PostWriteHeader = ({ onSubmit }: Props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderWrapper>
      <LeftSection>
        <BiArrowBack onClick={handleBack} />
        <h1>게시글 작성</h1>
      </LeftSection>
      <ButtonWrapper>
        <Button variant="secondary" onClick={handleBack}>
          취소
        </Button>
        <Button onClick={onSubmit}>등록</Button>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default PostWriteHeader;
