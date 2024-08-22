import { ChangeEvent } from "react";

export interface SignupForm {
    getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
    formValue: FormValueInterFace;
}

interface FormValueInterFace{
    userName: string;
    email: string;
    password: string;
    confirm_password:string;
    country:string;
    subscription_plan:string;
    subscription_type:string;
}