import { MemberType } from "@/types/team";

export interface MemberCardProps {
  member: MemberType;
  roles: string[];
  onOpenRoleModal: (id: number, pos: { top: number; left: number }) => void;
}
