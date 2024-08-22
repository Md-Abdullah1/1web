import * as Yup from "yup";

/* Start -- Special Parameters Form */
export interface ContactUsFormValidationProp {
    name: string;
    email: string;
    subject: string;
  }
  
  export const contactUsFormInitialValue: ContactUsFormValidationProp = {
    name: '',
    email: '',
    subject: ''
  };
  
  export const contactUsFormValidationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Invalid email format"),
    subject: Yup.string().required("Required"),
  });
  
  /* End -- Survey and Quizzes Form */