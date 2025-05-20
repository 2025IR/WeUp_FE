import { CgAddR } from "react-icons/cg";
import { AddSection, RoleEditContainer, Section } from "./style";
import { useEffect, useRef, useState } from "react";
import EditRoleModal from "../EditRoleModal";
import RoleCard from "../RoleCard";
import { useParams } from "react-router-dom";
import { useGetRole } from "@/query/team/useGetRole";
import { useCreateRole } from "@/query/team/useCreateRole";
import { getRandomColor } from "@/hooks/useRandomColor";
import queryClient from "@/query/reactQueryClient";

type EditMemberModalProps = {
  memberId: number;
  currentRoles: string[];
  onChangeRoles: (id: number, newRoles: string[]) => void;
};

const EditMemberModal = ({
  memberId,
  currentRoles,
  onChangeRoles,
}: EditMemberModalProps) => {
  const { projectId } = useParams();
  // 역할 리스트 조회 훅
  const { data: roleList } = useGetRole(Number(projectId));
  // 역할 리스트 추가 훅
  const { mutate: createRoleMutate } = useCreateRole();

  const [newRoleName, setNewRoleName] = useState("");

  const [openRoleEditId, setOpenRoleEditId] = useState<number | null>(null);
  const [editRoleModalPosition, setEditRoleModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const roleEditRef = useRef<HTMLDivElement | null>(null);

  // 역할 목록 클릭 시 선택되어있는지 체크.
  const toggleRole = (roleName: string) => {
    const updatedRoles = currentRoles.includes(roleName)
      ? currentRoles.filter((r) => r !== roleName)
      : [...currentRoles, roleName];

    onChangeRoles(memberId, updatedRoles);
  };

  // 역할 추가
  const handleCreateRole = () => {
    if (!newRoleName.trim()) return;

    const color = getRandomColor();

    createRoleMutate(
      {
        projectId: Number(projectId),
        roleName: newRoleName,
        roleColor: color,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["roleList", Number(projectId)],
          });
          setNewRoleName("");
        },
      }
    );
  };

  const handleOpenEditRoleModal = (
    id: number,
    pos: { top: number; left: number }
  ) => {
    setOpenRoleEditId(id);
    setEditRoleModalPosition(pos);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        roleEditRef.current &&
        !roleEditRef.current.contains(event.target as Node)
      ) {
        setOpenRoleEditId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Section>
        <p>Select option</p>
        <div>
          {roleList?.map((role) => (
            <RoleCard
              key={role.roleId}
              role={role}
              selected={currentRoles.includes(role.roleName)}
              onClick={() => toggleRole(role.roleName)}
              onOpenEditRoleModal={handleOpenEditRoleModal}
            />
          ))}
        </div>
      </Section>
      <Section>
        <p>Add option</p>
        <AddSection>
          <input
            type="text"
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleCreateRole();
            }}
          />
          <CgAddR onClick={handleCreateRole} />
        </AddSection>
      </Section>

      {openRoleEditId && (
        <RoleEditContainer
          ref={roleEditRef}
          top={editRoleModalPosition.top}
          left={editRoleModalPosition.left}
        >
          <EditRoleModal />
        </RoleEditContainer>
      )}
    </>
  );
};

export default EditMemberModal;
