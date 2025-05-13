import Modal from "@/components/common/Modal";
import { AiFillFolder, AiOutlineUpload } from "react-icons/ai";
import { ProjectEditModalProps } from "./type";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  DeleteSection,
  LabelWrapper,
  ModalContainer,
  PreviewSection,
  Section,
  UploadButton,
} from "./style";
import IconLabel from "@/components/common/IconLabel";
import Input from "@/components/common/Input";
import Label from "@/components/common/Label";
import { BiCheckbox, BiSolidCheckboxChecked } from "react-icons/bi";
import { useUpdateProject } from "@/query/project/useUpdateProject";
import { useParams } from "react-router-dom";
import { useDeleteProject } from "@/query/project/useDeleteProject";

const ProjectEditModal = ({ isOpen, onClose }: ProjectEditModalProps) => {
  const { projectId } = useParams();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [status, setStatus] = useState<"active" | "completed">("active");

  const projectState = useSelector((state: RootState) => state.project);

  const { mutate } = useUpdateProject({
    onSuccess: () => {
      onClose();
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const { mutate: deleteProjectMutate } = useDeleteProject({
    onSuccess: () => {},
    onError: () => {},
  });

  useEffect(() => {
    if (isOpen && projectState.id !== null) {
      setTitle(projectState.name);
      setImage(null);
      setPreviewUrl(projectState.image);
      setIsContactVisible(projectState.isContactVisible);
      setStatus(projectState.status);
    }
  }, [isOpen, projectState]);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("projectName", title);
    formData.append("status", String(status === "active"));
    formData.append("isRevealedNumber", String(isContactVisible));
    if (image) {
      formData.append("projectImage", image);
    }

    formData.forEach((value, key) => {
      console.log(key, value);
    });

    mutate({
      projectId: Number(projectId),
      data: formData,
    });
  };

  const handleDelete = () => {
    deleteProjectMutate(Number(projectId));
  };

  return (
    <Modal
      type="form"
      onClick={handleUpdate}
      onClose={onClose}
      buttonText="Edit project"
      icon={<AiFillFolder />}
      title="Edit Project"
    >
      <ModalContainer>
        <PreviewSection>
          <img
            src={
              previewUrl ||
              "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png"
            }
            alt="project profile preview"
          />
          <div>
            <Input label="Project Name:" value={title} onChange={setTitle} />
            <UploadButton as="label">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <IconLabel
                icon={<AiOutlineUpload />}
                gap="0.375rem"
                colors="textLight"
              >
                Upload Image
              </IconLabel>
            </UploadButton>
          </div>
        </PreviewSection>

        <Section>
          <p>프로젝트 진행 상태</p>
          <LabelWrapper>
            <Label
              onClick={() => setStatus("active")}
              colors={status === "active" ? "primary" : "secondary"}
              textColors={status === "active" ? "textWhite" : "text"}
            >
              진행중
            </Label>
            <Label
              onClick={() => setStatus("completed")}
              colors={status === "completed" ? "primary" : "secondary"}
              textColors={status === "completed" ? "textWhite" : "text"}
            >
              종료
            </Label>
          </LabelWrapper>
        </Section>

        <Section>
          <p>팀원 연락처 모두 공개</p>
          {isContactVisible ? (
            <BiSolidCheckboxChecked
              onClick={() => setIsContactVisible(false)}
            />
          ) : (
            <BiCheckbox onClick={() => setIsContactVisible(true)} />
          )}
        </Section>

        <DeleteSection>
          <p onClick={handleDelete}>프로젝트 삭제하기</p>
        </DeleteSection>
      </ModalContainer>
    </Modal>
  );
};

export default ProjectEditModal;
