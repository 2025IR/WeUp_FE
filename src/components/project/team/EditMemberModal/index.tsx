import { CgAddR } from "react-icons/cg";
import { AddSection, RoleEditContainer, Section } from "./style";
import { useEffect, useRef, useState } from "react";
import EditRoleModal from "../EditRoleModal";
import RoleCard from "../RoleCard";
import { useParams } from "react-router-dom";
import { useCreateRole } from "@/query/team/useCreateRole";
import { getRandomColor } from "@/hooks/useRandomColor";
import queryClient from "@/query/reactQueryClient";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { deleteRole, updateRole } from "@/store/role";
import { useEditRole } from "@/query/team/useEditRole";
import { useRemoveRole } from "@/query/team/useRemoveRole";

type EditMemberModalProps = {
  memberId: number;
  currentRoles: number[];
  onChangeRoles: (id: number, newRoles: number[]) => void;
};

const EditMemberModal = ({
  memberId,
  currentRoles,
  onChangeRoles,
}: EditMemberModalProps) => {
  const { projectId } = useParams();

  // 역할 리스트 조회 (store)
  const roleList = useSelector((state: RootState) => state.role.roles);

  // 역할 리스트 추가 훅
  const { mutate: createRoleMutate } = useCreateRole();

  const [newRoleName, setNewRoleName] = useState("");

  const [openRoleEditId, setOpenRoleEditId] = useState<number | null>(null);
  const [editRoleModalPosition, setEditRoleModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const roleEditRef = useRef<HTMLDivElement | null>(null);
  const targetRole = roleList.find((r) => r.roleId === openRoleEditId);

  const dispatch = useDispatch();
  const { mutate: editRoleMutate } = useEditRole();
  const { mutate: deleteRoleMutate } = useRemoveRole();
  const [pendingEdit, setPendingEdit] = useState<{
    roleId: number;
    roleName: string;
    roleColor: string;
  } | null>(null);

  // 역할 목록 클릭 시 선택되어있는지 체크.
  const toggleRole = (roleId: number) => {
    const updatedRoles = currentRoles.includes(roleId)
      ? currentRoles.filter((r) => r !== roleId)
      : [...currentRoles, roleId];

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

  const handleDeleteRole = (roleId: number) => {
    dispatch(deleteRole(roleId));
    deleteRoleMutate({
      projectId: Number(projectId),
      roleId,
    });
    if (currentRoles.includes(roleId)) {
      const updatedRoles = currentRoles.filter((id) => id !== roleId);
      onChangeRoles(memberId, updatedRoles);
    }
    setOpenRoleEditId(null);
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

  useEffect(() => {
    if (openRoleEditId === null && pendingEdit) {
      console.log("받은 변경값", pendingEdit);
      dispatch(updateRole(pendingEdit));
      editRoleMutate({
        projectId: Number(projectId),
        ...pendingEdit,
      });
      setPendingEdit(null);
    }
  }, [openRoleEditId]);

  return (
    <>
      <Section>
        <p>Select option</p>
        <div>
          {roleList?.map((role) => (
            <RoleCard
              key={role.roleId}
              role={role}
              selected={currentRoles.includes(role.roleId)}
              onClick={() => toggleRole(role.roleId)}
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

      {openRoleEditId && targetRole && (
        <RoleEditContainer
          ref={roleEditRef}
          top={editRoleModalPosition.top}
          left={editRoleModalPosition.left}
        >
          <EditRoleModal
            roleId={targetRole.roleId}
            roleName={targetRole.roleName}
            roleColor={targetRole.roleColor}
            onEdit={(updated) => setPendingEdit(updated)}
            onDelete={handleDeleteRole}
          />
        </RoleEditContainer>
      )}
    </>
  );
};

export default EditMemberModal;
