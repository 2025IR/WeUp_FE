import Label from "@/components/common/Label";
import PostWriteHeader from "@/components/project/postWrite/Header";
import {
  AiOutlineClose,
  AiOutlineFileAdd,
  AiOutlineUpload,
} from "react-icons/ai";
import { BiCategory, BiSolidReport } from "react-icons/bi";
import {
  Container,
  FileCard,
  FileInputWrapper,
  FilePlaceholder,
  FilePreview,
  FileWrapper,
  InfoTitle,
  InfoWrapper,
  InputWrapper,
  MainSection,
  ModalContainer,
  StyledInput,
  TextAreaWrapper,
} from "./style";
import { useEffect, useRef, useState } from "react";
import { useCategoryModal } from "@/hooks/useCategoryModal";
import CategorySelectModal from "@/components/project/postWrite/CategorySelectModal";
import { LabelWrapper } from "../../Task/style";
import { useCreatePost } from "@/query/board/useCreatePost";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useUpdatePost } from "@/query/board/useUpdatePost";
import { tagColorMap } from "@/utils/postTagColor";
import { CustomFile, UploadFile } from "./type";

const PostWrite = () => {
  const { projectId, postId } = useParams();

  const location = useLocation();
  const isEdit = location.state?.isEdit ?? false;
  const postData = location.state?.postData;

  console.log(postData);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [tag, setTag] = useState({ label: "기타", color: "brown" });
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [removeFileIds, setRemoveFileIds] = useState<number[]>([]);

  const labelRef = useRef<HTMLDivElement>(null);
  const { isOpen, position, modalRef, openModal, closeModal } =
    useCategoryModal();

  const mutation = useCreatePost();
  const updateMutation = useUpdatePost();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && postData) {
      setTitle(postData.title);
      setContents(postData.contents);
      setTag({ label: postData.tag, color: "brown" });

      const existingFiles = postData.files?.map((file: CustomFile) => ({
        name: file.fileName,
        size: file.fileSize,
        url: file.downloadUrl,
        id: file.fileId,
      }));

      setFiles(existingFiles || []);
    }
  }, [isEdit, postData]);

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("contents", contents);
    formData.append("tag", tag.label);

    files.forEach((file) => {
      if (file instanceof File) {
        formData.append("file", file);
      }
    });

    mutation.mutate({ projectId: Number(projectId), formData });
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("contents", contents);
    formData.append("tag", tag.label);
    files.forEach((file) => {
      if (file instanceof File) {
        formData.append("file", file);
      }
    });
    console.log(removeFileIds);
    removeFileIds.forEach((id) => {
      formData.append("removeFileIds", String(id));
    });

    updateMutation.mutate(
      { postId: Number(postId), formData },
      {
        onSuccess: () => {
          navigate(-1);
        },
      }
    );
  };

  const handleOpenModal = () => {
    if (labelRef.current) {
      openModal(labelRef.current);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => {
      const removed = prev[index];

      if ("id" in removed) {
        setRemoveFileIds((prevIds) => [...prevIds, removed.id!]);
      }

      return prev.filter((_, i) => i !== index);
    });
  };

  return (
    <Container>
      <PostWriteHeader
        onSubmit={isEdit ? handleUpdate : handleSubmit}
        isEdit={isEdit}
      />

      <MainSection>
        <InputWrapper>
          <StyledInput
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputWrapper>

        <InfoWrapper>
          <InfoTitle>
            <BiCategory />
            <p>카테고리</p>
          </InfoTitle>

          <LabelWrapper ref={labelRef} onClick={handleOpenModal}>
            <Label textColors="textWhite" colors={tagColorMap[tag.label]}>
              {tag.label}
            </Label>
          </LabelWrapper>

          {isOpen && (
            <ModalContainer
              ref={modalRef}
              top={position.top}
              left={position.left}
            >
              <CategorySelectModal
                selected={tag.label}
                onSelect={(tag) => {
                  setTag(tag);
                  closeModal();
                }}
              />
            </ModalContainer>
          )}
        </InfoWrapper>

        <FileInputWrapper htmlFor="file">
          <InfoTitle>
            <AiOutlineFileAdd />
            <p>파일 첨부</p>
          </InfoTitle>
          <FileWrapper>
            {files.length === 0 ? (
              <FilePlaceholder>
                <AiOutlineUpload />
                <p>Upload File</p>
              </FilePlaceholder>
            ) : (
              <FilePreview>
                {files.map((file, i) => (
                  <FileCard key={i}>
                    <BiSolidReport />
                    <p>{file.name}</p>
                    <p>{(file.size / 1024).toFixed(1)} KB</p>
                    <AiOutlineClose
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleRemoveFile(i);
                      }}
                    />
                  </FileCard>
                ))}
              </FilePreview>
            )}
          </FileWrapper>
          <input
            id="file"
            type="file"
            multiple
            onChange={(e) => {
              if (!e.target.files) return;
              const selected = Array.from(e.target.files);
              setFiles((prev) => [...prev, ...selected]);
            }}
          />
        </FileInputWrapper>

        <TextAreaWrapper>
          <textarea
            placeholder="게시글을 작성해주세요"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          ></textarea>
        </TextAreaWrapper>
      </MainSection>
    </Container>
  );
};

export default PostWrite;
