import Modal from "@/components/common/Modal";
import { AiFillFolderAdd, AiOutlineUpload } from "react-icons/ai";
import { ModalContainer, UploadButton } from "./style";
import Input from "@/components/common/Input";
import IconLabel from "@/components/common/IconLabel";
import { ProjectCreateModalProps } from "./type";
import { useEffect, useState } from "react";
import { useCreateProject } from "@/query/project/useCteateProject";

const ProjectCreateModal = ({ isOpen, onClose }: ProjectCreateModalProps) => {
  const [projectName, setProjectName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string>("");

  const { mutate } = useCreateProject({
    onSuccess: () => {
      onClose();
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("projectName", projectName);
    if (imageFile) formData.append("projectImage", imageFile);

    mutate(formData);

    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setProjectName("");
      setImageFile(null);
      setPreviewUrl("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Modal
      type="form"
      onClick={handleSubmit}
      onClose={onClose}
      buttonText="프로젝트 생성하기"
      icon={<AiFillFolderAdd />}
      title="새로운 프로젝트"
    >
      <ModalContainer>
        <img
          src={
            previewUrl ||
            "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png"
          }
          alt="project profile preview"
        />
        <div>
          <Input label="프로젝트 이름:" onChange={setProjectName} />
          <UploadButton as="label">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <IconLabel
              icon={<AiOutlineUpload />}
              gap="0.375rem"
              colors="textLight"
            >
              이미지 업로드
            </IconLabel>
          </UploadButton>
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default ProjectCreateModal;
