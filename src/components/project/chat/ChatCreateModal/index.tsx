import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { useGetMembers } from "@/query/team/useGetMember";
import { useState } from "react";
import {
  BiCheckbox,
  BiSolidChat,
  BiSolidCheckboxChecked,
} from "react-icons/bi";
import { MemberItem, MemberItemWrapper, MemberSection } from "./style";
import { useCreateChat } from "@/query/chat/useCreatChatRoom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface Props {
  projectId: number;
  onClose: () => void;
}

const ChatCreateModal = ({ onClose, projectId }: Props) => {
  const [chatTitle, setChatTitle] = useState("");
  const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);
  console.log(selectedUserIds, chatTitle);

  // 프로젝트 인원 불러오기
  const { data: invitableMembers } = useGetMembers(projectId);
  // 채팅방 생성
  const { mutate: createChatRoom } = useCreateChat();
  // memberId 꺼내오기
  const isMyId = useSelector((state: RootState) => state.project.memberId);

  const handleCreateChat = () => {
    if (!chatTitle.trim()) {
      alert("채팅방 제목을 입력해주세요!");
      return;
    }

    createChatRoom({
      chatRoomName: chatTitle,
      projectId,
      chatRoomMemberId: selectedUserIds,
    });

    onClose();
  };

  return (
    <Modal
      type="form"
      title="채팅방 생성하기"
      icon={<BiSolidChat />}
      buttonText="채팅방 생성하기"
      onClick={handleCreateChat}
      onClose={onClose}
    >
      <Input
        label="채팅방 제목 입력"
        value={chatTitle}
        onChange={setChatTitle}
      />

      <MemberSection>
        <p>팀원 선택</p>
        <MemberItemWrapper>
          {invitableMembers
            ?.filter((member) => member.memberId !== isMyId)
            .map((member) => {
              const isSelected = selectedUserIds.includes(member.memberId);

              return (
                <MemberItem
                  key={member.memberId}
                  isSelected={isSelected}
                  onClick={() => {
                    setSelectedUserIds((prev) =>
                      isSelected
                        ? prev.filter((id) => id !== member.memberId)
                        : [...prev, member.memberId]
                    );
                  }}
                  className={isSelected ? "selected" : ""}
                >
                  <img src={member.profileImage} alt="member_profile" />
                  <p>{member.name}</p>

                  {isSelected ? <BiSolidCheckboxChecked /> : <BiCheckbox />}
                </MemberItem>
              );
            })}
        </MemberItemWrapper>
      </MemberSection>
    </Modal>
  );
};

export default ChatCreateModal;
