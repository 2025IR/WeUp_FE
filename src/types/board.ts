export interface FetchBoardListParams {
  tag: string | null;
  search: string | null;
  page: number | null;
}

export interface BoardCardProps {
  boardId: number;
  title: string;
  nickname: string;
  profileImage: string;
  boardCreatedTime: string | null;
  tag: string;
  hasFile: boolean;
}

export interface PostProps {
  name: number;
  profileImage: string;
  title: string;
  contents: string;
  boardCreatedTime: string;
  tag: string;
  files: {
    fileName: string;
    fileSize: number;
    downloadUrl: string;
  }[];
}
