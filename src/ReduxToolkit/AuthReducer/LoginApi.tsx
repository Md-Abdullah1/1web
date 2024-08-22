import { LOGIN, base_api } from "../../Api";
import { apiSlice } from "../ApiSlice";

export const LoginApi  = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation({
            query: (credential) =>({
                url:`${base_api}/${LOGIN}`,
                method:`POST`,
                body:credential
            }),
        })
    })
}) 
export const { useLoginMutation} = LoginApi;
  