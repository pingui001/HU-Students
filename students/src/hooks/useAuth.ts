'use client';

import { useState } from 'react';
import { authService } from '@/services/auth.service';
import { LoginCredentials, LoginResponse, AuthError } from '@/types/auth.types';

/**
 * Hook personalizado para manejar la autenticación
 */
export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Función para realizar el login
   * @param credentials - Email y contraseña
   * @returns Promise con la respuesta del login
   */
  const login = async (credentials: LoginCredentials): Promise<LoginResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(credentials);
      setIsLoading(false);
      return response;
    } catch (err) {
      const authError = err as AuthError;
      setError(authError.message);
      setIsLoading(false);
      return null;
    }
  };

  /**
   * Función para cerrar sesión
   */
  const logout = () => {
    authService.logout();
    setError(null);
  };

  /**
   * Verifica si el usuario está autenticado
   */
  const isAuthenticated = () => {
    return authService.isAuthenticated();
  };

  /**
   * Obtiene el usuario actual
   */
  const getCurrentUser = () => {
    return authService.getUser();
  };

  return {
    login,
    logout,
    isAuthenticated,
    getCurrentUser,
    isLoading,
    error,
  };
}
