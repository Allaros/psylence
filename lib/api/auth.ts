import { api } from './axios';

export const authApi = {
   registration: async (userData: ISignUp) => {
      const { data } = await api.post('auth/register', userData);

      return data;
   },
   authorization: async (userData: ISignIn) => {
      const { data } = await api.post('auth/login', userData);

      return data;
   },
   logout: async () => {
      await api.post('auth/logout');
   },
};
