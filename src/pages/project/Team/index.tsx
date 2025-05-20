import Button from "@/components/common/Button";
import {
  Container,
  EmailSection,
  GridHeader,
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

const Team = () => {
  const { projectId } = useParams();
  const parsedProjectId = Number(projectId);
  const { data: teamMembers } = useGetMembers(parsedProjectId);

  const [openModal, setOpenModal] = useState(false);
  const [openRoleModalId, setOpenRoleModalId] = useState<number | null>(null);
  const roleModalRef = useRef<HTMLDivElement | null>(null);
  const [roleModalPosition, setRoleModalPosition] = useState({
    top: 0,
    left: 0,
  });

  const [memberRoles, setMemberRoles] = useState<{
    [memberId: number]: string[];
  }>({});

  const handleOpenRoleModal = (
    id: number,
    pos: { top: number; left: number }
  ) => {
    setOpenRoleModalId(id);
    setRoleModalPosition(pos);
  };

  const updateRoles = (memberId: number, roles: string[]) => {
    setMemberRoles((prev) => ({ ...prev, [memberId]: roles }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        roleModalRef.current &&
        !roleModalRef.current.contains(event.target as Node)
      ) {
        setOpenRoleModalId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (teamMembers) {
      const initialRoles = teamMembers.reduce((acc, m) => {
        acc[m.memberId] = m.roles;
        return acc;
      }, {} as { [id: number]: string[] });
      setMemberRoles(initialRoles);
    }
  }, [teamMembers]);

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
          {/* <div>
            <Button onClick={() => setOpenModal(true)}>초대</Button>
          </div> */}
        </GridHeader>

        {/* map 이용 mockdata 출력 */}
        {teamMembers?.map((member) => (
          <MemberCard
            key={member.memberId}
            member={member}
            roles={memberRoles[member.memberId] ?? member.roles}
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
