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
import { useNavigate, useParams } from "react-router-dom";
import { useGetPost } from "@/query/board/useGetPost";
import { formatTodoDate } from "@/utils/formatTime";
import { useDeletePost } from "@/query/board/useDeletePost";

const Post = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetPost(Number(postId));
  const deleteMutation = useDeletePost();

  const handleEdit = () => {
    navigate(`edit`, {
      state: { isEdit: true, postData: data },
    });
  };

  const handleDelete = () => {
    deleteMutation.mutate(Number(postId), {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  if (isLoading || !data) return <p>불러오는 중...</p>;

  return (
    <Container>
      <PostHeader
        postTitle={data.title}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <MainSection>
        <InfoWrapper>
          <InfoTitle>
            <AiOutlineUser />
            <p>작성자</p>
          </InfoTitle>

          <LabelWrapper>
            <IconLabel type="image" icon={data.profileImage}>
              {data.name}
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
              {formatTodoDate(new Date(data.boardCreatedTime))}
            </Label>
          </LabelWrapper>
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle>
            <BiCategory />
            <p>카테고리</p>
          </InfoTitle>

          <LabelWrapper>
            <Label textColors="textWhite">{data.tag}</Label>
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
                  <FileCard href={file.downloadUrl} download key={i}>
                    <BiSolidReport />
                    <p>{file.fileName}</p>
                    <p>{(file.fileSize / 1024).toFixed(1)} KB</p>
                  </FileCard>
                ))}
              </FilePreview>
            )}
          </FileWrapper>
        </FileInputWrapper>

        <TextAreaWrapper>
          <textarea value={data.contents} disabled></textarea>
        </TextAreaWrapper>
      </MainSection>
    </Container>
  );
};

export default Post;
