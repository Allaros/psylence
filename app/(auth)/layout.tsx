import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
   return (
      <section className="bg-primary-dark h-screen relative flex items-center justify-center">
         {/* <div className="absolute-center w-80 h-80 rounded-full bg-pink-radial"></div> */}
         <div className="w-[40%]">{children}</div>
      </section>
   );
};

export default AuthLayout;
