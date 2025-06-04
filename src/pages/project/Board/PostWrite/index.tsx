import Label from "@/components/common/Label";
import PostWriteHeader from "@/components/project/postWrite/Header";
import { AiOutlineFileAdd, AiOutlineUpload } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import {
  Container,
  FileInputWrapper,
  FilePlaceholder,
  FileWrapper,
  InfoTitle,
  InfoWrapper,
  InputWrapper,
  MainSection,
  StyledInput,
  TextAreaWrapper,
} from "./style";

const PostWrite = () => {
  return (
    <Container>
      <PostWriteHeader />

      <MainSection>
        <InputWrapper>
          <StyledInput type="text" placeholder="제목" />
        </InputWrapper>

        <InfoWrapper>
          <InfoTitle>
            <BiCategory />
            <p>카테고리</p>
          </InfoTitle>
          <Label>기타</Label>
        </InfoWrapper>

        <FileInputWrapper htmlFor="file">
          <InfoTitle>
            <AiOutlineFileAdd />
            <p>파일 첨부</p>
          </InfoTitle>
          <FileWrapper>
            <FilePlaceholder>
              <AiOutlineUpload />
              <p>Upload File</p>
            </FilePlaceholder>
          </FileWrapper>
          <input id="file" type="file" />
        </FileInputWrapper>

        <TextAreaWrapper>
          <textarea placeholder="게시글을 작성해주세요"></textarea>
        </TextAreaWrapper>
      </MainSection>
    </Container>
  );
};

export default PostWrite;
