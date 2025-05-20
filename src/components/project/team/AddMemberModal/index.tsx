import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { useInviteMember } from "@/query/team/useInviteMember";
import { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useParams } from "react-router-dom";

type AddMemberModalProps = {
  onClose: () => void;
};

const AddMemberModal = ({ onClose }: AddMemberModalProps) => {
  const { projectId } = useParams();
  const [email, setEmail] = useState("");
  const inviteMutaion = useInviteMember();

  const handleInvite = () => {
    if (projectId) {
      inviteMutaion.mutate({ projectId: Number(projectId), email });
    }
  };
  return (
    <Modal
      type="form"
      icon={<AiOutlineUserAdd />}
      buttonText="초대하기"
      title="팀원 초대하기"
      onClick={handleInvite}
      onClose={onClose}
    >
      <Input label="이메일 :" type="email" value={email} onChange={setEmail} />
    </Modal>
  );
};

export default AddMemberModal;
