import { ProjectType } from "@/types/project";
import instance from "../axiosInstance";

// 리스트 불러오기
export const getProjectList = async (): Promise<ProjectType[]> => {
  const res = await instance.post("/project/list", {});
  return res.data.data;
};

// 프로젝트 생성
export const createProject = async (data: FormData): Promise<void> =>
  await instance.post("/project/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// 프로젝트 조회
export const getProjectInfo = async (project_id: number) => {
  const res = await instance.post(`/project/detail/${project_id}`);
  return res.data.data;
};

// 프로젝트 수정
export const updateProject = async (project_id: number, data: FormData) => {
  await instance.put(`/project/edit/${project_id}`, data);
};

// 프로젝트 삭제
export const deleteProject = async (project_id: number) => {
  await instance.delete("/project/delete", { data: { project_id } });
};

// 프로젝트 설명 수정
export const updateProjectDescription = async (
  project_id: number,
  description: string
) => {
  await instance.put(`/project/edit/description/${project_id}`, null, {
    params: { description },
  });
};
