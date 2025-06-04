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

// 게시글 작성
export const createPost = async (
  projectId: number,
  formData: FormData
): Promise<void> => {
  await instance.post(`/board/create/${projectId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
