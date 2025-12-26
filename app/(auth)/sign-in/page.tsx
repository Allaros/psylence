import React from 'react';

import { AuthForm } from '@/components/forms/AuthForm';

const SignIn = () => {
   return (
      <div className="bg-white rounded-[8px] px-6 py-5">
         <h4 className="h4-bold-black text-center">Авторизация</h4>
         <AuthForm formType="SIGN_IN" />
      </div>
   );
};

export default SignIn;
