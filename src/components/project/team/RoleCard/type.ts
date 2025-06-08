import { RoleType } from "@/types/team";

export interface RoleProps {
  role: RoleType;
  selected?: boolean;
  onClick?: () => void;
  onOpenEditRoleModal: (id: number, pos: { top: number; left: number }) => void;
}
