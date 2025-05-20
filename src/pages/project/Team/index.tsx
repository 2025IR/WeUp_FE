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

const Team = () => {
  const mockTeamMembers = [
    {
      member_id: 1,
      nickname: "정윤석",
      profile_image: "/images/profile1.png",
      email: "mar0722@naver.com",
      phone_number: "010-6225-9611",
      is_leader: true,
      role_name: ["FE"],
    },
    {
      member_id: 2,
      nickname: "김지우",
      profile_image: "/images/profile2.png",
      email: "jiwoo123@gmail.com",
      phone_number: "010-1234-5678",
      is_leader: false,
      role_name: ["BE", "DevOps"],
    },
    {
      member_id: 3,
      nickname: "박하늘",
      profile_image: "/images/profile3.png",
      email: "skyblue98@gmail.com",
      phone_number: "010-8765-4321",
      is_leader: false,
      role_name: ["AI"],
    },
  ];

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
        {mockTeamMembers.map((member) => (
          <MemberCard
            key={member.member_id}
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
