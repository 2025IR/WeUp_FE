import { AlertType } from "@/types/alert";
import instance from "../../utils/axios/axiosInstance";

// 알림 리스트 불러오기
export const getAlertsList = async (): Promise<AlertType[]> => {
  const response = await instance.get(`/notification/list`);
  return response.data.data.content;
};

// 알림 리스트 불러오기
export const getUnreadCount = async (): Promise<number> => {
  const response = await instance.get(`/notification/unread`);
  return response.data.data.unread;
};
