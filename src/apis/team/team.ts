import { MemberType, RoleType } from "@/types/team";
import instance from "../axiosInstance";

// 팀원 초대
export const inviteMember = (projectId: number, email: string) => {
  return instance.post("/member/invite", { projectId, email });
};

// 팀원 조회
export const fetchTeamMembers = async (
  project_id: number
): Promise<MemberType[]> => {
  const res = await instance.post(`/member/list/${project_id}`);
  return res.data.data;
};

// 팀원 삭제
export const deleteMember = (projectId: number, memberId: number) => {
  return instance.put("/member/delete", { projectId, memberId });
};

// 팀원 역할 수정
export const assignMemberRole = (
  projectId: number,
  memberId: number,
  roleIds: number[]
) => {
  console.log(projectId, memberId, roleIds);
  return instance.put("member/role/assign", { projectId, memberId, roleIds });
};

// 역할 리스트 불러오기
export const fetchRoleList = async (
  project_id: number
): Promise<RoleType[]> => {
  const res = await instance.post(`member/role/list/${project_id}`);
  return res.data.data;
};

// 역할 리스트 추가
export const createRole = (
  projectId: number,
  roleName: string,
  roleColor: string
) => {
  return instance.post("member/role/create", {
    projectId,
    roleName,
    roleColor,
  });
};

// 역할 리스트 수정
export const editRole = (
  projectId: number,
  roleId: number,
  roleName: string,
  roleColor: string
) => {
  return instance.put("member/role/edit", {
    projectId,
    roleId,
    roleName,
    roleColor,
  });
};

// 역할 리스트 삭제
export const removeRole = (projectId: number, roleId: number) => {
  return instance.delete("member/role/remove", { data: { projectId, roleId } });
};

// 팀장 위임
export const delegateLeader = (projectId: number, newLeaderId: number) => {
  return instance.put("/member/delegate/leader", { projectId, newLeaderId });
};
