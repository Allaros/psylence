'use client';
import React from 'react';

import { AuthForm } from '@/components/forms/AuthForm';
import { SignUpSchema } from '@/lib/validations';

const SignUp = () => {
   return (
      <div className="bg-white rounded-[8px] px-6 py-5 ">
         <h4 className="h4-bold-black text-center">Регистрация</h4>
         <AuthForm formType="SIGN_UP" />
      </div>
   );
};

export default SignUp;
