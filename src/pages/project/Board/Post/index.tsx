import Label from "@/components/common/Label";
import {
  AiOutlineCalendar,
  AiOutlineFileAdd,
  AiOutlineUpload,
  AiOutlineUser,
} from "react-icons/ai";
import { BiCategory, BiSolidReport } from "react-icons/bi";
import { LabelWrapper } from "../../Task/style";
import {
  Container,
  FileCard,
  FileInputWrapper,
  FilePlaceholder,
  FilePreview,
  FileWrapper,
  InfoTitle,
  InfoWrapper,
  MainSection,
  TextAreaWrapper,
} from "./style";
import PostHeader from "@/components/project/post/Header";
import IconLabel from "@/components/common/IconLabel";

const data = {
  title: "회의록",
  content: "게시글 내용",
  writer: "정윤석",
  createdAt: "2025-06-05",
  tag: { label: "라벨" },
  files: [
    {
      name: "example.pdf",
      size: 1048576, // 바이트 단위
      url: "https://example.com/files/example.pdf",
    },
  ],
};

const Post = () => {
  return (
    <Container>
      <PostHeader postTitle={data.title} />

      <MainSection>
        <InfoWrapper>
          <InfoTitle>
            <AiOutlineUser />
            <p>작성자</p>
          </InfoTitle>

          <LabelWrapper>
            <IconLabel type="image" icon={"sdd"}>
              정윤석
            </IconLabel>
          </LabelWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle>
            <AiOutlineCalendar />
            <p>작성일</p>
          </InfoTitle>

          <LabelWrapper>
            <Label colors="secondary" textColors="textLight">
              {data.createdAt}
            </Label>
          </LabelWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle>
            <BiCategory />
            <p>카테고리</p>
          </InfoTitle>

          <LabelWrapper>
            <Label textColors="textWhite">라벨</Label>
          </LabelWrapper>
        </InfoWrapper>

        <FileInputWrapper htmlFor="file">
          <InfoTitle>
            <AiOutlineFileAdd />
            <p>파일 첨부</p>
          </InfoTitle>
          <FileWrapper>
            {data.files.length === 0 ? (
              <FilePlaceholder>
                <AiOutlineUpload />
                <p>Upload File</p>
              </FilePlaceholder>
            ) : (
              <FilePreview>
                {data.files.map((file, i) => (
                  <FileCard key={i}>
                    <BiSolidReport />
                    <p>{file.name}</p>
                    <p>{(file.size / 1024).toFixed(1)} KB</p>
                  </FileCard>
                ))}
              </FilePreview>
            )}
          </FileWrapper>
        </FileInputWrapper>

        <TextAreaWrapper>
          <textarea placeholder="게시글을 작성해주세요" disabled></textarea>
        </TextAreaWrapper>
      </MainSection>
    </Container>
  );
};

export default Post;
