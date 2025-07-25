import { BiEditAlt, BiExit } from "react-icons/bi";
import { ChatRoomInfo, Container, IconWrapper } from "./style";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import { FaEdit } from "react-icons/fa";
import Input from "@/components/common/Input";
import { MdError } from "react-icons/md";

interface ChatHeaderInfo {
  id: number;
  title: string;
  members: string[];
}

const ChatHeader = ({ chatRoom }: { chatRoom: ChatHeaderInfo }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const handleEdit = () => {
    console.log("채팅방 수정");
  };
  const handleAddMember = () => {
    console.log("채팅방 인원 추가");
  };
  const handleExit = () => {
    console.log("채팅방 나가기");
  };

  return (
    <Container>
      <ChatRoomInfo>
        <h1>{chatRoom.title}</h1>
        <p>{chatRoom.members + ""}</p>
      </ChatRoomInfo>

      <IconWrapper>
        <BiEditAlt onClick={() => setIsEditModalOpen(true)} />
        <AiOutlineUserAdd onClick={() => setIsAddMemberOpen(true)} />
        <BiExit onClick={() => setIsExitModalOpen(true)} />
      </IconWrapper>

      {isEditModalOpen && (
        <Modal
          type="form"
          icon={<FaEdit />}
          onClick={handleEdit}
          onClose={() => setIsEditModalOpen(false)}
          title="채팅방 수정하기"
          buttonText="채팅방 수정하기"
        >
          <Input label="채팅방 제목 입력" value={chatRoom.title} type="text" />
        </Modal>
      )}

      {isAddMemberOpen && (
        <Modal
          type="form"
          icon={<AiOutlineUserAdd />}
          onClick={handleAddMember}
          onClose={() => setIsAddMemberOpen(false)}
          title="채팅방 초대하기"
          buttonText="팀원 초대하기"
        >
          <div>
            <p>팀원선택</p>
            <div></div>
          </div>
        </Modal>
      )}

      {isExitModalOpen && (
        <Modal
          type="default"
          icon={<MdError />}
          onClick={handleExit}
          onClose={() => setIsExitModalOpen(false)}
          title="채팅방에서 나가시겠습니까?"
          buttonText="나가기"
        >
          <p>
            채팅방을 나가게 되면 더 이상 메세지를 받을 수 없습니다.
            나가시겠습니까?
          </p>
        </Modal>
      )}
    </Container>
  );
};

export default ChatHeader;
