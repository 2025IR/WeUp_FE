import IconLabel from "@/components/common/IconLabel";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { BiUserCircle } from "react-icons/bi";
import { ModalContainer, PreviewSection, Section, UploadButton } from "./style";
import { AiOutlineUpload } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useEditUserProfile } from "@/query/auth/useEditUserProfile";
import queryClient from "@/query/reactQueryClient";

export interface UserEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    name: string;
    email: string;
    phoneNumber: string;
    profileImage: string;
  };
}

const UserEditModal = ({ isOpen, onClose, user }: UserEditModalProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName(user.name);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber);
      setPreviewUrl(user.profileImage);
      setImage(null);
    }
  }, [isOpen, user]);

  const { mutate: editUserMutate } = useEditUserProfile({
    onSuccess: () => {
      console.log("회원 정보 수정 성공");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      onClose();
    },
    onError: (err) => {
      console.log("회원 정보 수정 실패", err);
    },
  });

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("name", name);
    if (image) {
      formData.append("profileImage", image);
    }
    formData.append("phoneNumber", phoneNumber);

    editUserMutate({
      data: formData,
    });
  };

  return (
    <Modal
      type="form"
      onClick={handleUpdate}
      onClose={onClose}
      buttonText="Edit Profile"
      icon={<BiUserCircle />}
      title="Edit Profile"
    >
      <ModalContainer>
        <PreviewSection>
          <img
            src={
              previewUrl ||
              "https://we-up-public.s3.ap-northeast-2.amazonaws.com/smiley1.png"
            }
            alt="user profile preview"
          />
          <div>
            <Input label="User Name:" value={name} onChange={setName} />
            <UploadButton as="label">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
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

        <Input type="email" label="E-mail:" value={email} readOnly />
        <Input
          type="tel"
          label="Phone Number:"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />

        <Section>
          <p>회원 탈퇴</p>
        </Section>
      </ModalContainer>
    </Modal>
  );
};

export default UserEditModal;
