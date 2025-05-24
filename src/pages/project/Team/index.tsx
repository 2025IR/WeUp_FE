import Button from "@/components/common/Button";
import {
  Container,
  EmailSection,
  GridHeader,
  InviteButton,
  NameSection,
  RoleModalContainer,
  RoleSection,
  TeamWrapper,
} from "./style";

import MemberCard from "@/components/project/team/MemberCard";
import { useEffect, useRef, useState } from "react";
import AddMemberModal from "@/components/project/team/AddMemberModal";
import EditMemberModal from "@/components/project/team/EditMemberModal";
import { useParams } from "react-router-dom";
import { useGetMembers } from "@/query/team/useGetMember";
import { useEditMember } from "@/query/team/useEditMember";
import { useGetRole } from "@/query/team/useGetRole";
import { useDispatch } from "react-redux";
import { setRoles } from "@/store/role";

const Team = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const { data: teamMembers } = useGetMembers(parsedProjectId);
  const { data: teamRoles } = useGetRole(parsedProjectId);

  const [openModal, setOpenModal] = useState(false);

  const [openRoleModalId, setOpenRoleModalId] = useState<number | null>(null);
  const roleModalRef = useRef<HTMLDivElement | null>(null);
  const [roleModalPosition, setRoleModalPosition] = useState({
    top: 0,
    left: 0,
  });

  // 멤버 역할 수정 훅 (모달 창 닫힐 때 실행)
  const { mutate: editMemberMutate } = useEditMember();

  const handleOpenRoleModal = (
    id: number,
    pos: { top: number; left: number }
  ) => {
    setOpenRoleModalId(id);
    setRoleModalPosition(pos);
  };

  const [memberRoles, setMemberRoles] = useState<{
    [memberId: number]: number[];
  }>({});

  const updateRoles = (memberId: number, roles: number[]) => {
    setMemberRoles((prev) => ({ ...prev, [memberId]: roles }));
  };

  // 전체적으로 클릭 이벤트 부여
  // 해당 ref(모달창)을 제외한 부분 클릭 시 요청 발생 (모달 off)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        roleModalRef.current &&
        !roleModalRef.current.contains(event.target as Node)
      ) {
        if (openRoleModalId !== null) {
          editMemberMutate({
            projectId: Number(projectId),
            memberId: openRoleModalId,
            roleIds: memberRoles[openRoleModalId],
          });
          setOpenRoleModalId(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openRoleModalId, memberRoles, editMemberMutate, projectId]);

  useEffect(() => {
    if (teamMembers) {
      const initialRoles = teamMembers.reduce((acc, m) => {
        acc[m.memberId] = m.roleIds;
        return acc;
      }, {} as { [id: number]: number[] });
      setMemberRoles(initialRoles);
    }
  }, [teamMembers]);

  // 프로젝트 역할 전역 상태로 저장.
  useEffect(() => {
    if (teamRoles) {
      dispatch(setRoles(teamRoles));
    }
  }, [teamRoles, dispatch]);

  return (
    <Container>
      <TeamWrapper>
        <GridHeader>
          <NameSection>
            <p>이름</p>
          </NameSection>
          <EmailSection>
            <p>이메일</p>
          </EmailSection>
          <div>
            <p>연락처</p>
          </div>
          <RoleSection>
            <p>역할</p>
          </RoleSection>
          <InviteButton>
            <Button onClick={() => setOpenModal(true)}>초대</Button>
          </InviteButton>
        </GridHeader>

        {/* map 이용 mockdata 출력 */}
        {teamMembers?.map((member) => (
          <MemberCard
            key={member.memberId}
            member={member}
            roles={memberRoles[member.memberId] ?? member.roleIds}
            onOpenRoleModal={handleOpenRoleModal}
          />
        ))}
      </TeamWrapper>
      <Button size="lg">Schedule</Button>

      {/* 인원 추가 모달 */}
      {openModal && <AddMemberModal onClose={() => setOpenModal(false)} />}

      {/* 역할 변경 모달 */}
      {openRoleModalId && (
        <RoleModalContainer
          ref={roleModalRef}
          top={roleModalPosition.top}
          left={roleModalPosition.left}
        >
          <EditMemberModal
            memberId={openRoleModalId}
            currentRoles={memberRoles[openRoleModalId] ?? []}
            onChangeRoles={updateRoles}
          />
        </RoleModalContainer>
      )}
    </Container>
  );
};

export default Team;
