'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { createContext, JSX, ReactNode, useContext } from 'react';
import { toast } from 'sonner';

import { ROUTES } from '@/constants/routes';
import { useMe } from '@/hooks/auth/useMe';
import { authApi } from '@/lib/api/auth';
import { handleApiError } from '@/lib/handlers/axiosErrHandling';

interface AuthContextType {
   user: IUser | null;
   isLoading: boolean;
   logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
   children,
}: {
   children: ReactNode;
}): JSX.Element => {
   const router = useRouter();
   const queryClient = useQueryClient();
   const { data: user, isLoading } = useMe();

   const logout = async () => {
      try {
         await authApi.logout();

         await queryClient.invalidateQueries({ queryKey: ['me'] });
         toast.success('Вы вышли из аккаунта');
         router.push(ROUTES.HOME);
      } catch (error: unknown) {
         if (error instanceof Error) {
            handleApiError(error.message || 'Ошибка при выходе из аккаунта.');
         }
      }
   };

   return (
      <AuthContext.Provider value={{ user, isLoading, logout }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context)
      throw new Error('useAuth должен находиться внутри AuthProvider');
   return context;
};
