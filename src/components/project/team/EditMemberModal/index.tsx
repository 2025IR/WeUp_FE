import { CgAddR } from "react-icons/cg";
import { AddSection, RoleEditContainer, Section } from "./style";
import { useEffect, useRef, useState } from "react";
import EditRoleModal from "../EditRoleModal";
import RoleCard from "../RoleCard";
import { useParams } from "react-router-dom";
import { useGetRole } from "@/query/team/useGetRole";

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
  const parsedProjectId = Number(projectId);
  const { data: roleList } = useGetRole(parsedProjectId);

  const [openRoleEditId, setOpenRoleEditId] = useState<number | null>(null);
  const [editRoleModalPosition, setEditRoleModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const roleEditRef = useRef<HTMLDivElement | null>(null);

  const toggleRole = (roleName: string) => {
    const updatedRoles = currentRoles.includes(roleName)
      ? currentRoles.filter((r) => r !== roleName)
      : [...currentRoles, roleName];

    onChangeRoles(memberId, updatedRoles);
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
          <input type="text" />
          <CgAddR />
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
