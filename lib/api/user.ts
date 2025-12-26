import { api } from './axios';

export const userApi = {
   getMe: async () => {
      const { data } = await api.get('/auth/me');

      return data;
   },
};
