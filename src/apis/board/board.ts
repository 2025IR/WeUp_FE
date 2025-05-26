import { FetchBoardListParams } from "@/types/board";
import instance from "../axiosInstance";

// 게시글 조회
export const fetchBoardList = async (
  projectId: number,
  body: FetchBoardListParams
) => {
  const response = await instance.post(`/board/list/${projectId}`, body);
  return response.data.data;
};
