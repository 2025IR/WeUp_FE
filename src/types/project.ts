// 프로젝트 리스트
export interface ProjectType {
  projectId: number;
  projectName: string;
  projectImage: string;
  memberCount: number;
  finalTime: string;
  projectCreatedTime: string;
  status: boolean;
}

// 프로젝트 상세 조회 (응답)
export interface ProjectInfo {
  name: string;
  image: string;
  description: string;
  isContactVisible: boolean;
  isLeader: boolean;
  status: boolean;
}

// 프로젝트 저장
export interface ProjectStoreInfo extends ProjectInfo {
  id: number | null;
}
