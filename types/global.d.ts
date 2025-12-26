interface ISignUp {
   fullname: string;
   username: string;
   email: string;
   password: string;
}

interface ISignIn {
   email: string;
   password: string;
}

interface IUser {
   id: number;
   email: string;
   username: string | null;
   fullname: string;
   role: 'user' | 'psychologist';
   imgSrc: string | null;
}
