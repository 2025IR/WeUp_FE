import { BoardCardProps } from "@/types/board";

export interface BoardListProps {
  posts: BoardCardProps[];
  isLoading: boolean;
}

export interface BoardLabelProps {
  tag: string;
}
