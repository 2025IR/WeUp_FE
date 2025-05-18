export interface RoleType {
  roleId: number;
  roleName: string;
  roleColor: string;
}

export interface RoleProps {
  role: RoleType;
  onOpenEditRoleModal: (id: number, pos: { top: number; left: number }) => void;
}
