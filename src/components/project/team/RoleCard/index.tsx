import { BiCheck, BiDotsHorizontalRounded } from "react-icons/bi";
import { RoleEditMenu, RoleInfo, RoleWrapper } from "./style";
import Label from "@/components/common/Label";
import { usePopoverPosition } from "@/hooks/useModalPosition";
import { RoleProps } from "./type";

const RoleCard = ({ role, onOpenEditRoleModal }: RoleProps) => {
  const { targetRef } = usePopoverPosition();

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
    onOpenEditRoleModal(role.roleId, pos);
  };
  return (
    <RoleWrapper key={role.roleId}>
      <RoleInfo>
        <BiCheck />
        <Label>{role.roleName}</Label>
      </RoleInfo>
      <RoleEditMenu ref={targetRef} onClick={handleClick}>
        <BiDotsHorizontalRounded />
      </RoleEditMenu>
    </RoleWrapper>
  );
};

export default RoleCard;
