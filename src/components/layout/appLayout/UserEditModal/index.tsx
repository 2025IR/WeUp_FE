import IconLabel from "@/components/common/IconLabel";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { BiUserCircle } from "react-icons/bi";
import { ModalContainer, PreviewSection, Section, UploadButton } from "./style";
import { AiOutlineUpload } from "react-icons/ai";

export interface UserEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockData = {
  name: "정윤석",
  profileImage:
    "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley3.png",
  phoneNumber: "010-6225-9611",
  email: "mar072244@gmail.com",
};

const UserEditModal = ({ isOpen, onClose }: UserEditModalProps) => {
  if (!isOpen) return null;
  return (
    <Modal
      type="form"
      onClose={onClose}
      buttonText="Edit Profile"
      icon={<BiUserCircle />}
      title="Edit Profile"
    >
      <ModalContainer>
        <PreviewSection>
          <img
            src={
              mockData.profileImage ||
              "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png"
            }
            alt="user profile preview"
          />
          <div>
            <Input label="User Name:" />
            <UploadButton as="label">
              <input type="file" accept="image/*" />
              <IconLabel
                icon={<AiOutlineUpload />}
                fontSize="caption"
                gap="0.375rem"
                colors="textLight"
              >
                Upload Image
              </IconLabel>
            </UploadButton>
          </div>
        </PreviewSection>

        <Input label="E-mail:" />
        <Input label="Phone Number:" />

        <Section>
          <p>회원 탈퇴</p>
        </Section>
      </ModalContainer>
    </Modal>
  );
};

export default UserEditModal;
