'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

import { ROUTES } from '@/constants/routes';
import { useLogin } from '@/hooks/auth/useLogin';
import { useRegister } from '@/hooks/auth/useRegister';
import { handleApiError } from '@/lib/handlers/axiosErrHandling';
import { SignInSchema, SignUpSchema } from '@/lib/validations';

import Loading from '../Loading';
import { Button } from '../ui/button';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

const defaultValuesMap = {
   SIGN_IN: { email: '', password: '' },
   SIGN_UP: {
      fullname: '',
      username: '',
      email: '',
      password: '',
      birthdate: '',
   },
};

const schemas = {
   SIGN_IN: SignInSchema,
   SIGN_UP: SignUpSchema,
};

const LabelsMapping = {
   fullname: 'Имя',
   username: 'Никнейм',
   email: 'Адрес элекстронной почты',
   password: 'Пароль',
   birthdate: 'Дата рожднения',
};

interface AuthFormProps {
   formType: 'SIGN_IN' | 'SIGN_UP';
}

export function AuthForm({ formType }: AuthFormProps) {
   const schema = schemas[formType];
   const defaultValues = defaultValuesMap[formType];
   const router = useRouter();

   const { mutate: registrate, isPending: registering } = useRegister();
   const { mutate: login, isPending: logging } = useLogin();

   const form = useForm({
      resolver: zodResolver(schema),
      defaultValues,
   });

   const submitHandler = async (data: z.infer<typeof schema>) => {
      if (formType === 'SIGN_UP') {
         registrate(data as ISignUp, {
            onError: (error) => {
               handleApiError(error, 'Ошибка при регистрации.');
            },
            onSuccess: () => {
               toast.success('Регистрация прошла успешно!');

               router.push(ROUTES.HOME);
            },
         });
      } else if (formType === 'SIGN_IN') {
         login(data, {
            onError: (error) => {
               handleApiError(error, 'Ошибка при авторизации.');
            },
            onSuccess: () => {
               toast.success('Авторизация прошла успешно!');

               router.push(ROUTES.HOME);
            },
         });
      }
   };

   return (
      <Form {...form}>
         <form
            className="flex flex-col items-start gap-4"
            onSubmit={form.handleSubmit(submitHandler)}
         >
            {Object.keys(defaultValues).map((field) => (
               <FormField
                  key={field}
                  control={form.control}
                  name={field as keyof typeof defaultValues}
                  render={({ field }) => (
                     <FormItem className="flex flex-col items-start w-full">
                        <FormLabel className="text-body">
                           {LabelsMapping[field.name]}
                        </FormLabel>
                        <FormControl className="border border-primary-dark rounded w-full px-2 py-1.5">
                           <Input
                              type={
                                 (field.name as string) === 'birthdate'
                                    ? 'date'
                                    : 'text'
                              }
                              className="mb-0"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            ))}

            {formType === 'SIGN_IN' ? (
               <p>
                  Нет аккаунта?{' '}
                  <Link
                     href={ROUTES.SIGN_UP}
                     className="animated-underline font-medium"
                  >
                     Зарегистрироваться
                  </Link>
               </p>
            ) : (
               <p>
                  Есть аккаунт?{' '}
                  <Link
                     href={ROUTES.SIGN_IN}
                     className="animated-underline font-medium"
                  >
                     Войти
                  </Link>
               </p>
            )}

            <Button
               className="bg-primary-dark hover:bg-text-100 mt-4"
               type="submit"
            >
               {registering || logging ? (
                  <Loading />
               ) : formType === 'SIGN_IN' ? (
                  'Войти'
               ) : (
                  'Зарегистрироваться'
               )}
            </Button>
         </form>
      </Form>
   );
}
