export type MemberType = {
  memberId: number;
  name: string;
  email: string;
  profileImage: string;
  phoneNumber: string;
  isLeader: boolean;
  roles: string[];
};

export interface RoleType {
  roleId: number;
  roleName: string;
  roleColor: string;
}
