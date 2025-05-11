export interface FetchBoardListParams {
  projectId: number;
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
}
