import { FetchBoardListParams, PostProps } from "@/types/board";
import instance from "../axiosInstance";

// 게시글 목록 조회
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

// 게시글 조회
export const getPost = async (boardId: number): Promise<PostProps> => {
  const response = await instance.post(`/board/detail/${boardId}`);
  return response.data.data;
};

// 게시글 수정
export const updatePost = async (
  boardId: number,
  formData: FormData
): Promise<void> => {
  await instance.put(`/board/edit/${boardId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// 게시글 삭제
export const deletePost = (boardId: number) => {
  return instance.delete(`/board/delete/${boardId}`);
};
