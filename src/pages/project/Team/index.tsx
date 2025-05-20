import Button from "@/components/common/Button";
import {
  Container,
  GridHeader,
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

  const handleOpenRoleModal = (
    id: number,
    pos: { top: number; left: number }
  ) => {
    setOpenRoleModalId(id);
    setRoleModalPosition(pos);
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

  return (
    <Container>
      <TeamWrapper>
        <GridHeader>
          <div>
            <p>이름</p>
          </div>
          <div>
            <p>이메일</p>
          </div>
          <div>
            <p>연락처</p>
          </div>
          <RoleSection>
            <p>역할</p>
          </RoleSection>
          <div>
            <Button onClick={() => setOpenModal(true)}>초대</Button>
          </div>
        </GridHeader>

        {/* map 이용 mockdata 출력 */}
        {teamMembers?.map((member) => (
          <MemberCard
            key={member.memberId}
            member={member}
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
          <EditMemberModal />
        </RoleModalContainer>
      )}
    </Container>
  );
};

export default Team;
