import * as SecureStore from 'expo-secure-store';
import { useCallback, useEffect, useState } from 'react';

export function useRememberMe() {
  const [rememberMe, setRememberMe] = useState(false);

  const saveAuthData = useCallback(async (email: string, password: string) => {
    await SecureStore.setItemAsync('rememberMe', 'true');
    await SecureStore.setItemAsync('authData', JSON.stringify({ email, password }));
  }, []);

  const getAuthData = useCallback(async () => {
    const data = await SecureStore.getItemAsync('authData');
    return data ? JSON.parse(data) : null;
  }, []);

  const clearAuthData = useCallback(async () => {
    await SecureStore.deleteItemAsync('authData');
    await SecureStore.deleteItemAsync('rememberMe');
  }, []);

  const handleRememberMe = useCallback(async () => {
    setRememberMe((prevState) => {
      if (prevState === false) {
        return true;
      }

      clearAuthData();
      return false;
    });
  }, [clearAuthData]);

  useEffect(() => {
    async function isRememberMeActive() {
      const isActive = (await SecureStore.getItemAsync('rememberMe')) === 'true';
      setRememberMe(isActive);
    }

    isRememberMeActive();
  }, []);

  return { saveAuthData, getAuthData, rememberMe, handleRememberMe };
}
