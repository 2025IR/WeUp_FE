export type CustomFile = {
  fileName: string;
  fileSize: number;
  downloadUrl: string;
  fileId: true;
};

type DisplayFile = {
  name: string;
  size: number;
  url?: string;
  id?: number;
};

export type UploadFile = File | DisplayFile;
