import Modal from "@/components/common/Modal";
import { AiFillFolderAdd, AiOutlineUpload } from "react-icons/ai";
import { ModalContainer, UploadButton } from "./style";
import Input from "@/components/common/Input";
import IconLabel from "@/components/common/IconLabel";
import { ProjectCreateModalProps } from "./type";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateProject } from "@/query/project/useCteateProject";

const ProjectCreateModal = ({ isOpen, onClose }: ProjectCreateModalProps) => {
  const [projectName, setProjectName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string>("");

  // 프로젝트 생성 이후 데이터 다시 받아오기 위해 이용
  const queryClient = useQueryClient();
  const { mutate } = useCreateProject({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projectList"] });
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
    if (!projectName) return alert("프로젝트 이름을 입력해주세요.");
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
      buttonText="Create project"
      icon={<AiFillFolderAdd />}
      title="New Project"
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
          <Input label="Project Name:" onChange={setProjectName} />
          <UploadButton as="label">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <IconLabel
              icon={<AiOutlineUpload />}
              gap="0.375rem"
              colors="textLight"
            >
              Upload Image
            </IconLabel>
          </UploadButton>
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default ProjectCreateModal;
