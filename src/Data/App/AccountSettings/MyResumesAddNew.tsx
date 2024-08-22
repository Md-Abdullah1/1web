import * as Yup from "yup";

export interface MyResumesValidationProp{
    resumeName:string;
    jobTitle:string;
    objective:string;
    subCategory:string;
    languages:string;
}

export const myResumesFormInitialValue:MyResumesValidationProp = {resumeName : "", jobTitle:"", objective:"",subCategory:"",languages:""};

export const myReusmesFormSchema = Yup.object().shape({
    resumeName:Yup.string().required("Required"),
    jobTitle:Yup.string().required("Required"),
    objective:Yup.string().required("Required"),
    subCategory:Yup.string().required("Required"),
    languages:Yup.string().required("Required"),
    workExperience:Yup.string().required("Required"),
    education:Yup.string().required("Required"),
    training:Yup.string().required("Required"),
    skill:Yup.string().required("Required"),
    hobbiesInterest:Yup.string().required("Required"),
});