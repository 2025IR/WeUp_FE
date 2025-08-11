import {
  BiCheckbox,
  BiEditAlt,
  BiExit,
  BiSolidCheckboxChecked,
} from "react-icons/bi";
import {
  ChatRoomInfo,
  Container,
  IconWrapper,
  MemberItem,
  MemberItemWrapper,
  MemberSection,
} from "./style";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useEffect, useState } from "react";
import Modal from "@/components/common/Modal";
import { FaEdit } from "react-icons/fa";
import Input from "@/components/common/Input";
import { MdError } from "react-icons/md";
import { useEditChatRoomTitle } from "@/query/chat/useEditChatRoomTitle";
import queryClient from "@/query/reactQueryClient";
import { useInviteMembers } from "@/query/chat/useInviteMembers";
import { useLeaveChatRoom } from "@/query/chat/useLeaveChatRoom";
import { useGetInvitableMembers } from "@/query/chat/useGetInvitableMemers";

interface ChatHeaderInfo {
  id: number;
  title: string;
  members: string[];
}

const ChatHeader = ({
  chatRoom,
  projectId,
}: {
  chatRoom: ChatHeaderInfo;
  projectId: number;
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const [chatRoomName, setChatRoomName] = useState("");
  const { mutate: editTitle } = useEditChatRoomTitle();

  const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);
  const { data: inviteMembers } = useGetInvitableMembers(chatRoom.id);
  const { mutate: inviteMembersMutate } = useInviteMembers();

  const { mutate: leaveChatRoomMutate } = useLeaveChatRoom();

  useEffect(() => {
    setChatRoomName(chatRoom.title);
  }, [chatRoom]);

  const handleEdit = () => {
    if (!chatRoomName.trim()) return alert("채팅방 이름을 입력해주세요!");

    editTitle(
      {
        chatRoomId: chatRoom.id,
        chatRoomName,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["chatRoomList", projectId],
          });
          setIsEditModalOpen(false);
        },
      }
    );
  };

  const handleAddMember = () => {
    if (selectedUserIds.length === 0) {
      return alert("초대할 팀원을 선택해주세요!");
    }

    inviteMembersMutate(
      {
        chatRoomId: chatRoom.id,
        inviteMemberIds: selectedUserIds,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["chatRoomList", projectId],
          });
          alert("초대가 완료되었습니다.");
          setIsAddMemberOpen(false);
          setSelectedUserIds([]);
        },
        onError: (error) => {
          alert("초대에 실패했습니다.");
          console.error(error);
        },
      }
    );
  };

  const handleExit = () => {
    leaveChatRoomMutate(chatRoom.id, {
      onSuccess: () => {
        alert("채팅방에서 나갔습니다.");
        queryClient.invalidateQueries({
          queryKey: ["chatRoomList", projectId],
        });
        setIsExitModalOpen(false);
      },
      onError: (error) => {
        alert("채팅방 나가기 중 오류가 발생했습니다.");
        console.error(error);
      },
    });
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
          <Input
            label="채팅방 제목 입력"
            value={chatRoomName}
            onChange={setChatRoomName}
            type="text"
          />
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
          <MemberSection>
            <p>팀원 선택</p>
            <MemberItemWrapper>
              {inviteMembers?.map((member) => {
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
                    <p>{member.memberName}</p>

                    {isSelected ? <BiSolidCheckboxChecked /> : <BiCheckbox />}
                  </MemberItem>
                );
              })}
            </MemberItemWrapper>
          </MemberSection>
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
