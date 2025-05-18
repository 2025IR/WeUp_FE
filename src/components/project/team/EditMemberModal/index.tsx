import { CgAddR } from "react-icons/cg";
import { AddSection, RoleEditContainer, Section } from "./style";
import { useEffect, useRef, useState } from "react";
import EditRoleModal from "../EditRoleModal";
import RoleCard from "../RoleCard";

const mockRoleList = [
  {
    roleId: 1,
    roleName: "FE",
    roleColor: "RED",
  },
  {
    roleId: 2,
    roleName: "BE",
    roleColor: "GREEN",
  },
  {
    roleId: 3,
    roleName: "AI",
    roleColor: "BLUE",
  },
];

const EditMemberModal = () => {
  const [openRoleEditId, setOpenRoleEditId] = useState<number | null>(null);
  const [editRoleModalPosition, setEditRoleModalPosition] = useState({
    top: 0,
    left: 0,
  });
  const roleEditRef = useRef<HTMLDivElement | null>(null);

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
          {mockRoleList.map((role) => (
            <RoleCard
              key={role.roleId}
              role={role}
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
