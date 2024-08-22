import * as Yup from "yup";

export interface RegistrationPlanValidationProp{
    country:string;
    subscription_type:string;
}

export const registratinoFormInitialValue:RegistrationPlanValidationProp = {country:"",subscription_type:""}

export const registrationFormSchema = Yup.object().shape({
    country:Yup.string().required("Required"),
    subscription_type:Yup.string().required("Required"),
})