import { FetchBoardListParams } from "@/types/board";
import instance from "../axiosInstance";

// 게시글 조회
export const fetchBoardList = async (params: FetchBoardListParams) => {
  const response = await instance.post("/board/list", params);
  return response.data.data;
};
