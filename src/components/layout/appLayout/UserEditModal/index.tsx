import Modal from "@/components/common/Modal";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";

export interface UserEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserEditModal = ({ isOpen, onClose }: UserEditModalProps) => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");

  if (!isOpen) return null;
  return (
    <Modal
      type="form"
      onClose={onClose}
      buttonText="Edit Profile"
      icon={<BiUserCircle />}
      title="Edit Profile"
    >
      모달창
    </Modal>
  );
};

export default UserEditModal;
