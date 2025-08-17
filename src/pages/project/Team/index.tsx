import Button from "@/components/common/Button";
import {
  Container,
  EmailSection,
  GridHeader,
  InviteButton,
  NameSection,
  PhoneNumberSection,
  RoleModalContainer,
  RoleSection,
  TeamWrapper,
} from "./style";

import MemberCard from "@/components/project/team/MemberCard";
import { useEffect, useRef, useState } from "react";
import AddMemberModal from "@/components/project/team/AddMemberModal";
import EditMemberModal from "@/components/project/team/EditMemberModal";
import { useGetMembers } from "@/query/team/useGetMember";
import { useEditMember } from "@/query/team/useEditMember";
import { useGetRole } from "@/query/team/useGetRole";
import { useDispatch, useSelector } from "react-redux";
import { setRoles } from "@/store/role";
import ScheduleModal from "@/components/project/schedule/ScheduleModal";
import { RootState } from "@/store/store";
import { useStomp } from "@/contexts/StompContext";
import queryClient from "@/query/reactQueryClient";

const Team = () => {
  const dispatch = useDispatch();
  const projectId = useSelector((state: RootState) => state.project.id);
  const { data: teamMembers } = useGetMembers(projectId);
  const { data: teamRoles } = useGetRole(projectId);

  const [openModal, setOpenModal] = useState(false);

  const [openRoleModalId, setOpenRoleModalId] = useState<number | null>(null);
  const roleModalRef = useRef<HTMLDivElement | null>(null);
  const [roleModalPosition, setRoleModalPosition] = useState({
    top: 0,
    left: 0,
  });

  const [openScheduleModal, setOpenScheduleModal] = useState(false);

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

  // 웹소켓 구독 정보 변경
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const { client, connSeq } = useStomp();
  useEffect(() => {
    if (!client || !client.connected) return;

    const subscription = client.subscribe(
      `/topic/member/${projectId}`,
      (message) => {
        const newMessage = JSON.parse(message.body);

        if (newMessage.type === "LIST_CHANGED") {
          queryClient.invalidateQueries({
            queryKey: ["memberList", projectId],
          });
        }

        if (newMessage.type === "ROLE_CHANGED") {
          queryClient.invalidateQueries({
            queryKey: ["roleList", projectId],
          });
        }

        console.log("📥 새 메시지 도착:", newMessage);
      },
      {
        Authorization: `${accessToken}`,
      }
    );

    return () => {
      subscription.unsubscribe({
        Authorization: `${accessToken}`,
      });
    };
  }, [client, projectId, dispatch, accessToken, connSeq]);

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
          <PhoneNumberSection>
            <p>연락처</p>
          </PhoneNumberSection>
          <RoleSection>
            <p>역할</p>
          </RoleSection>
          <InviteButton>
            <Button onClick={() => setOpenModal(true)}>초대</Button>
          </InviteButton>
        </GridHeader>

        {/* map 이용 mockdata 출력 */}
        {[...(teamMembers ?? [])]
          .sort((a, b) => {
            return Number(b.isLeader) - Number(a.isLeader);
          })
          .map((member) => (
            <MemberCard
              key={member.memberId}
              member={member}
              roles={memberRoles[member.memberId] ?? member.roleIds}
              onOpenRoleModal={handleOpenRoleModal}
            />
          ))}
      </TeamWrapper>
      <Button size="lg" onClick={() => setOpenScheduleModal(true)}>
        Schedule
      </Button>

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

      {/* 스케줄 확인 모달 */}
      {openScheduleModal && projectId && (
        <ScheduleModal
          onClose={() => setOpenScheduleModal(false)}
          projectId={projectId}
        />
      )}
    </Container>
  );
};

export default Team;
