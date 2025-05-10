export interface ProjectType {
  projectId: number;
  projectName: string;
  projectImage: string;
  people: number;
  last_access_time: string;
  project_created_time: string;
  project_ended_time: string;
}

export interface ProjectCreateRequest {
  projectName: string;
  projectImage: File;
}
