import { LoginCredentials, LoginResponse, AuthError } from '@/types/auth.types';


const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';


class AuthService {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          message: errorData.message || 'Error al iniciar sesión',
          status: response.status,
        } as AuthError;
      }

      
      const data: LoginResponse = await response.json();
      
      
      if (data.token) {
        this.saveToken(data.token);
      }

      if (data.user) {
        this.saveUser(data.user);
      }

      return data;
    } catch (error) {
     
      if ((error as AuthError).message) {
        throw error;
      }
      throw {
        message: 'Error de conexión con el servidor',
        status: 500,
      } as AuthError;
    }
  }

  
  saveToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  
  saveUser(user: any): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  
  getUser(): any | null {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

 
  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    }
  }

  
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  
  getAuthHeaders(): HeadersInit {
    const token = this.getToken();
    return {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }
}


export const authService = new AuthService();
