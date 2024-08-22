import * as Yup from "yup";
import { CHECK_USERNAME } from "../../Api";
import { client } from "../../Api/client";


export const formSchema = Yup.object().shape({
    firstname: Yup.string().min(2, "Too Short!").max(15, "Too Long!").required(),
    lastname: Yup.string().min(2, "Too Short").max(15, "Too Long").required(),
    email: Yup.string().email().required(),
});

export const loginFormSchema = Yup.object().shape({
    // username: Yup.string().test('future','must a string',(value, ctx) =>{
    //     console.log(value);
    //     if(value === undefined){
    //         return ctx.createError({message:'username can not empty'});
    //     }else if(value.length < 3){
    //         return ctx.createError({message:'username length must be 3 character long'});
    //     }
    //     return client.post(CHECK_USERNAME, {username:value}).then(res =>{
    //         if(!res.data.success){
    //             return ctx.createError({message:res.data.message});
    //         }else{
    //             return true;
    //         }
    //     }).catch(error =>{
    //         if(error?.data?.success){
    //             return true;
    //         }
    //         return ctx.createError({message:'Username not found'});
    //     });
    // }),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
});

export const forgetPasswordFormSchema = Yup.object().shape({
    email: Yup.string().required("Required"),
});

export const confirmPasswordFormSchema = Yup.object().shape({
    password: Yup.string().required("Required"),
});