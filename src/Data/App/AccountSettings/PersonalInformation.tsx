import * as Yup from "yup";

export interface PersonalInformationValidationProp{
    username:string;
    firstname:string;
    lastname:string;    
    primary_email:string;
    country:string;
}

export const personalInformationFormInitialValue:PersonalInformationValidationProp = {
    username:"",
    firstname:"", 
    lastname:"",
    primary_email:"",
    country:"",
}


export const personalInformationFormSchema = Yup.object().shape({
    username:Yup.string().required("Required"),
    firstname:Yup.string().required("Required"),
    lastname:Yup.string().required("Required"),
    primary_email:Yup.string().required("Required"),
    country:Yup.string().required("Required"),
})