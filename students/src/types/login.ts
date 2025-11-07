
export interface LoginCredentials {
  email: string;
  password: string;
}


export interface LoginResponse {
  token: string;
  user: User;
  message?: string;
}


export interface User {
  id: string;
  email: string;
  name: string;
  role?: string;
  
}


export interface AuthError {
  message: string;
  status?: number;
}
