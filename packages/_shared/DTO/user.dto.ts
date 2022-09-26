export interface UserLogin {
  email: string;
  password: string;
}
export interface UserRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  phone: string;
}
export interface User {
  id: string;
  token: string;
}
export interface UserLoginPassport {
  firstName: string;
  lastName: string;
  seria: string;
  number: string;
}
