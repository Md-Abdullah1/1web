import { GET_COUNTRY, base_api } from "../Api";
import { apiSlice } from "./ApiSlice";

export const tempApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getCountry: builder.query({
            query: () =>({
                url:`${base_api}/${GET_COUNTRY}`,
                method:`GET`,
            }),
            providesTags :["Plans"],
            keepUnusedDataFor :5,
            transformResponse(response){
                return response;
            }
        })
    })
}) 
export const { useGetCountryQuery} = tempApiSlice;