import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authApi } from '@/lib/api/auth';

export const useLogin = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: authApi.authorization,

      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ['me'] });
      },
   });
};
