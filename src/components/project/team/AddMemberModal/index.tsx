import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { AiOutlineUserAdd } from "react-icons/ai";

type AddMemberModalProps = {
  onClick: () => void;
  onClose: () => void;
};

const AddMemberModal = ({ onClick, onClose }: AddMemberModalProps) => {
  return (
    <Modal
      type="form"
      icon={<AiOutlineUserAdd />}
      buttonText="초대하기"
      title="팀원 초대하기"
      onClick={onClick}
      onClose={onClose}
    >
      <Input label="이메일 :" type="email" />
    </Modal>
  );
};

export default AddMemberModal;
