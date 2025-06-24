export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  userId: number;
}

export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
}

export interface EditProfileRequest {
  name: string;
  profile_image: string;
  phoneNumbe: string;
}

export interface AuthStoreInfo {
  accessToken: string | null;
  userId: number | null;
}
