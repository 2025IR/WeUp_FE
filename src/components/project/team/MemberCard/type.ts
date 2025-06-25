import { MemberType } from "@/types/team";

export interface MemberCardProps {
  member: MemberType;
  roles: number[];
  onOpenRoleModal: (id: number, pos: { top: number; left: number }) => void;
}

export type Position = {
  top: number;
  left: number;
};
