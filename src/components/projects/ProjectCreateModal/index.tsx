import Modal from "@/components/common/Modal";
import { AiFillFolderAdd, AiOutlineUpload } from "react-icons/ai";
import { ModalContainer, UploadButton } from "./style";
import Input from "@/components/common/Input";
import IconLabel from "@/components/common/IconLabel";
import { ProjectCreateModalProps } from "./type";
import { useState } from "react";

const ProjectCreateModal = ({
  isOpen,
  onClose,
  onClick,
}: ProjectCreateModalProps) => {
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
  };

  if (!isOpen) return null;

  return (
    <Modal
      type="form"
      onClick={onClick}
      onClose={onClose}
      buttonText="Create project"
      icon={<AiFillFolderAdd />}
      title="New Project"
    >
      <ModalContainer>
        <img
          src={
            previewUrl ||
            "https://pixabay.com/get/gd18b5061c19770af1bbd98ff5f270e14287f99abedbbb2f40f7da254c6ffffede7381e165b8c0c5a31ff8b13f62fb279b815dcaed0017039c8939cb3d680f9ee73f2c2dc54073dc1fd4657769d3a74fb_640.jpg"
          }
          alt="project profile priview"
        />
        <div>
          <Input label="Project Name:" />
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
