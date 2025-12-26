import z from 'zod';

export const SignUpSchema = z.object({
   fullname: z
      .string()
      .min(1, { message: 'Имя пользователя обязательно при регистрации.' }),
   username: z.string(),
   email: z
      .string()
      .email({ message: 'Пожалуйста проверьте правильность почты.' }),
   password: z
      .string()
      .min(5, { message: 'Пароль должен быть не короче 5 символов' })
      .max(30, { message: 'Пароль не может быть длиннее 30 символов' })
      .regex(/\p{Lu}/u, {
         message: 'Пароль должен содержать хотя бы одну заглавную букву',
      })
      .regex(/\p{Ll}/u, {
         message: 'Пароль должен содержать хотя бы одну строчную букву',
      })
      .regex(/\p{Nd}/u, {
         message: 'Пароль должен содержать хотя бы одну цифру',
      })
      .regex(/[^\p{L}\p{Nd}]/u, {
         message: 'Пароль должен содержать хотя бы один специальный символ',
      }),
   birthdate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: 'Некорректный формат даты',
   }),
});

export const SignInSchema = z.object({
   email: z
      .string()
      .email({ message: 'Пожалуйста, введите корректную почту.' }),
   password: z.string().min(1, { message: 'Пожалуйста, введите пароль.' }),
});
