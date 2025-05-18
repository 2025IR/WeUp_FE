export interface TeamMemberType {
  member_id: number;
  nickname: string;
  profile_image: string;
  email: string;
  phone_number: string;
  is_leader: boolean;
  role_name: string[];
}

export interface MemberCardProps {
  member: TeamMemberType;
  onOpenRoleModal: (id: number, pos: { top: number; left: number }) => void;
}
