import * as Yup from "yup";

export interface RenewSignupValidationProp{
    country:string;
    subscription_type:string;
    subscription_plan:string;
    terms_condition:string;
}

export const signupFormInitialValue:RenewSignupValidationProp = {country:"",subscription_plan:"",subscription_type:"",terms_condition:""}


export const renewSignupFormSchema = Yup.object().shape({
    country:Yup.string().required("Required"),
    subscription_type:Yup.string().required("Required"),
    subscription_plan:Yup.string().required("Required"),
    terms_condition:Yup.string().required(),
})