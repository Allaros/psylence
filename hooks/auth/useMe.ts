import { useQuery } from '@tanstack/react-query';

import { userApi } from '@/lib/api/user';

export const useMe = () => {
   return useQuery({
      queryKey: ['me'],
      queryFn: userApi.getMe,
      staleTime: Infinity,
      retry: false,
   });
};
