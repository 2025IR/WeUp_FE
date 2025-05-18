export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
}

export interface EditProfileRequest {
  name: string;
  profile_image: string;
}
