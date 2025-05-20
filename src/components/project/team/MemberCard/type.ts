import { MemberType } from "@/types/team";

export interface MemberCardProps {
  member: MemberType;
  onOpenRoleModal: (id: number, pos: { top: number; left: number }) => void;
}
