import * as Yup from "yup";

export interface SignupValidationProp{
    username:string;
    email:string;
    password:string;
    confirm_password:string;
    country:string;
    subscription_type:string;
    subscription_plan:string;
    terms_condition:string;
    date_of_birth:string;
    guardian_name:string;
    guardian_email:string;
}

export const signupFormInitialValue:SignupValidationProp = {username:"", email:"",password:"",confirm_password:"",country:"",subscription_plan:"",subscription_type:"",terms_condition:"",guardian_name:"",guardian_email:"",date_of_birth:""}


export const signupFormSchema = Yup.object().shape({
    username:Yup.string().required("Required"),
    email:Yup.string().required("Required"),
    password:Yup.string().required("Required"),
    confirm_password:Yup.string().required("Required"),
    country:Yup.array().min(1).required("Required"),
    subscription_type:Yup.string().required("Required"),
    subscription_plan:Yup.string().required("Required"),
    terms_condition:Yup.string().required(),
    date_of_birth:Yup.string().required("Required"),
    guardian_name:Yup.string().required("Required"),
    guardian_email:Yup.string().required("Required"),
})