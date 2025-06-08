export type MemberType = {
  memberId: number;
  name: string;
  email: string;
  profileImage: string;
  phoneNumber: string;
  isLeader: boolean;
  roleIds: number[];
};

export interface RoleType {
  roleId: number;
  roleName: string;
  roleColor: string;
}
