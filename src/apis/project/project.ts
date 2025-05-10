import { ProjectCreateRequest, ProjectType } from "@/types/project";
import instance from "../axiosInstance";

// 리스트 불러오기
export const getProjectList = async (): Promise<ProjectType[]> => {
  const res = await instance.post("/project/list", {});
  return res.data.data;
};

// 프로젝트 생성
export const createProject = async (
  data: ProjectCreateRequest
): Promise<void> => await instance.post("/project/create", data);
