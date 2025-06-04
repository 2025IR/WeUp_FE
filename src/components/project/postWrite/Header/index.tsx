import Button from "@/components/common/Button";
import { BiArrowBack } from "react-icons/bi";
import { ButtonWrapper, HeaderWrapper, LeftSection } from "./style";

type Props = {
  onSubmit: () => void;
};

const PostWriteHeader = ({ onSubmit }: Props) => {
  return (
    <HeaderWrapper>
      <LeftSection>
        <BiArrowBack />
        <h1>게시글 작성</h1>
      </LeftSection>
      <ButtonWrapper>
        <Button variant="secondary">취소</Button>
        <Button onClick={onSubmit}>등록</Button>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default PostWriteHeader;
