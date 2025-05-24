import { BiCheck, BiDotsHorizontalRounded } from "react-icons/bi";
import { RoleEditMenu, RoleInfo, RoleWrapper } from "./style";
import Label from "@/components/common/Label";
import { usePopoverPosition } from "@/hooks/useModalPosition";
import { RoleProps } from "./type";
import { BsDot } from "react-icons/bs";

const RoleCard = ({
  role,
  selected = false,
  onClick,
  onOpenEditRoleModal,
}: RoleProps) => {
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
    <RoleWrapper key={role.roleId} selected={selected}>
      <RoleInfo onClick={onClick}>
        {selected ? <BiCheck /> : <BsDot />}
        <Label colors={role.roleColor}>{role.roleName}</Label>
      </RoleInfo>
      <RoleEditMenu ref={targetRef} onClick={handleClick}>
        <BiDotsHorizontalRounded />
      </RoleEditMenu>
    </RoleWrapper>
  );
};

export default RoleCard;
