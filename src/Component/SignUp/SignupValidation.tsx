import * as Yup from "yup";
export interface SignupInitialValue{
    title:string;
    client:string
    progress: number;
    type:string
    priority: string
    size: string
    description: string  
  }

export const signupInitialValue: SignupInitialValue = {
    title: "",
    client: "",
    progress: 0,
    type: "",
    priority: "",
    size: "",
    description: "",
  };
  
  export const signupValidation = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    client: Yup.string().required("Client Name is required"),
    description: Yup.string().required("Some Details is required"),
    progress: Yup.number().required("Between 0 to 100").max(100),
  });



 