import instance from "../axiosInstance";

// 팀원 초대
export const inviteMember = (projectId: number, email: string) => {
  console.log({ projectId, email });
  return instance.post("/member/invite", { data: { projectId, email } });
};

// 팀원 조회
export const fetchTeamMembers = (project_id: number) => {
  return instance.post("/member/list", { project_id });
};

// 팀원 삭제
export const deleteMember = (project_id: number, member_id: number) => {
  return instance.delete("/member/delete", { data: { project_id, member_id } });
};

// 팀원 역할 수정
export const assignMemberRole = (
  projectId: number,
  memberId: number,
  roleName: string[]
) => {
  return instance.post("/role/assign", { projectId, memberId, roleName });
};

// 역할 리스트 불러오기
export const fetchRoleList = (projectId: number) => {
  return instance.post("/role/list", { projectId });
};

// 역할 리스트 추가
export const createRole = (
  projectId: number,
  roleName: string,
  roleColor: string
) => {
  return instance.post("/role/create", { projectId, roleName, roleColor });
};

// 역할 리스트 수정
export const editRole = (
  projectId: number,
  roleId: number,
  roleName: string,
  roleColor: string
) => {
  return instance.put("/role/edit", { projectId, roleId, roleName, roleColor });
};

// 역할 리스트 삭제
export const removeRole = (projectId: number, roleId: number) => {
  return instance.delete("/role/remove", { data: { projectId, roleId } });
};

// 팀장 위임
export const delegateLeader = (project_id: number, member_id: number) => {
  return instance.put("/member/delegate/leader", { project_id, member_id });
};
