import React, { createContext, useState, useContext, ReactNode, useCallback, useMemo } from 'react';
import { ILoginResponse } from '@/types/login';
import { useRememberMe } from '@/hooks/useRememberMe';
import { IUser } from '@/types/user';
import { postLogin } from '@/services/auth';

interface SessionContextProps {
  logout: () => void;
  user: IUser | null;
  isAuthenticated: boolean;
  login: (username: string, password: string, rememberMe: boolean) => void;
}

const SessionContext = createContext<SessionContextProps | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const { saveAuthData } = useRememberMe();
  const [user, setUser] = useState<IUser | null>(null);

  const login = useCallback(
    async (username: string, password: string, rememberMe: boolean) => {
      await postLogin({ username, password })
        .then(async (response) => {
          setUser(response);

          if (rememberMe) await saveAuthData(username, password);
        })
        .catch((error) => {
          throw error;
        });
    },
    [saveAuthData],
  );

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const isAuthenticated = useMemo(() => !!user?.id, [user?.id]);

  return (
    <SessionContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};
