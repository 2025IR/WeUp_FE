import IconLabel from "@/components/common/IconLabel";
import {
  ContextMenu,
  EmailSection,
  GridItem,
  MemberEditButton,
  MenuWrapper,
  ModalContent,
  NameSection,
  PhoneNumberSection,
  RoleSection,
} from "./style";
import Label from "@/components/common/Label";
import { MemberCardProps } from "./type";
import { usePopoverPosition } from "@/hooks/useModalPosition";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { FaCrown } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useCategoryModal } from "@/hooks/useCategoryModal";
import { useDelegateLeader } from "@/query/team/useDelegateLeader";
import { useParams } from "react-router-dom";
import queryClient from "@/query/reactQueryClient";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { useDeleteMember } from "@/query/team/useDeleteMember";
import { setLeader } from "@/store/project";

const MemberCard = ({ member, roles, onOpenRoleModal }: MemberCardProps) => {
  const { targetRef, calculatePosition } = usePopoverPosition();
  const { projectId } = useParams();
  const roleList = useSelector((state: RootState) => state.role.roles);

  const { isOpen, position, modalRef, openModal, closeModal } =
    useCategoryModal();

  const [isDelegateModalOpen, setIsDelegateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { mutate: delegateLeader } = useDelegateLeader();
  const { mutate: deleteMember } = useDeleteMember();

  const { leader, revealedNumber } = useSelector(
    (state: RootState) => state.project
  );
  const dispatch = useDispatch();

  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    openModal(e.currentTarget);
  };

  const handleClick = () => {
    const pos = calculatePosition();
    if (pos) {
      onOpenRoleModal(member.memberId, pos);
    }
  };

  const handleDelegate = () => {
    delegateLeader(
      {
        projectId: Number(projectId),
        newLeaderId: member.memberId,
      },
      {
        onSuccess: () => {
          // 모달 닫기
          closeModal();

          // 팀장 위임 시 현재 사용자의 leader 상태를 false로 변경 (전역)
          dispatch(setLeader(false));

          // 팀원 목록 쿼리 무효화 (다시 불러오기)
          queryClient.invalidateQueries({
            queryKey: ["memberList", Number(projectId)],
          });

          // 위임 재확인 모달 닫기
          setIsDelegateModalOpen(false);
        },
        onError: (err) => {
          console.error("위임 실패:", err);
        },
      }
    );
  };

  const handleDelete = () => {
    deleteMember(
      {
        projectId: Number(projectId),
        memberId: member.memberId,
      },
      {
        onSuccess: () => {
          closeModal();
          queryClient.invalidateQueries({
            queryKey: ["memberList", Number(projectId)],
          });
        },
        onError: (err) => {
          console.error("삭제 실패:", err);
        },
      }
    );
  };

  return (
    <GridItem key={member.memberId}>
      <NameSection>
        <IconLabel
          icon={member.profileImage}
          type="image"
          gap="0.5rem"
          colors="text"
          size="lg"
          full
        >
          {member.name}
        </IconLabel>
        {member.isLeader && <FaCrown />}
      </NameSection>
      <EmailSection>
        <p>{member.email}</p>
      </EmailSection>
      <PhoneNumberSection>
        {revealedNumber ? member.phoneNumber : "-"}
      </PhoneNumberSection>
      <RoleSection ref={targetRef}>
        <div onClick={handleClick}>
          {roles.length > 0 ? (
            roles.map((roleId, idx) => {
              const role = roleList.find((r) => r.roleId === roleId);
              return role ? (
                <Label key={idx} colors={role.roleColor}>
                  {role.roleName}
                </Label>
              ) : null;
            })
          ) : (
            <Label colors="secondary" textColors="text">
              -
            </Label>
          )}
        </div>
      </RoleSection>
      {!member.isLeader && leader && (
        <MemberEditButton className="edit-btn" onClick={handleMenuClick}>
          <BiDotsVerticalRounded />
          {isOpen && (
            <ContextMenu ref={modalRef} top={position.top} left={position.left}>
              <MenuWrapper
                onClick={() => {
                  setIsDelegateModalOpen(true);
                }}
              >
                <p>팀장 위임하기</p>
              </MenuWrapper>
              <hr />
              <MenuWrapper
                onClick={() => {
                  setIsDeleteModalOpen(true);
                }}
              >
                <p>팀원 내보내기</p>
              </MenuWrapper>
            </ContextMenu>
          )}
        </MemberEditButton>
      )}

      {isDelegateModalOpen && (
        <Modal
          buttonText="위임하기"
          type="default"
          title="조장을 위임하시겠습니까?"
          icon={<AiOutlineUserSwitch />}
          onClick={handleDelegate}
          onClose={() => setIsDelegateModalOpen(false)}
        >
          <ModalContent>
            조장을 위임하시면, 인원 관리 및 프로젝트 관리 권한이 변경됩니다.
          </ModalContent>
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal
          buttonText="내보내기"
          type="default"
          title="팀원을 내보내시겠습니끼?"
          icon={<AiOutlineUserSwitch />}
          onClick={handleDelete}
          onClose={() => setIsDeleteModalOpen(false)}
        >
          <ModalContent>
            <span>{member.name}</span> 님을 프로젝트에서 내보내시겠습니까?
          </ModalContent>
        </Modal>
      )}
    </GridItem>
  );
};

export default MemberCard;
