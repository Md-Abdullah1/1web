import { GET_REGISTRATION_TYPES, base_api } from "../../Api";
import { apiSlice } from "../ApiSlice";

export const registrationTypeApi = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getRegistrationType: builder.query({
            query: () =>({
                url:`${base_api}/${GET_REGISTRATION_TYPES}`,
                method:`GET`,
            }),
            providesTags :["Plans"],
            keepUnusedDataFor :5
        })
    })
}) 
export const { useGetRegistrationTypeQuery} = registrationTypeApi;