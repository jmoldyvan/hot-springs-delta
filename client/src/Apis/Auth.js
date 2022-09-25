import axios from "axios";

//login 
export const SignIn = (data) => axios.post('auth/postLogin' , data );

//signup 
export const createAccount = (data) => axios.post('auth/postSignup' , data);