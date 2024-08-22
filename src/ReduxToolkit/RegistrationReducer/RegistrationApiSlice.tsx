import { GET_PLANS, base_api } from "../../Api";
import { apiSlice } from "../ApiSlice";

export const registrationApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getPlans: builder.query({
            query: (data) =>({
                url:`${base_api}/${GET_PLANS}`,
                method:`POST`,
                body:{country_id:101,registration_type:['1','2']}
            }),
            
            providesTags :["Plans"],
            keepUnusedDataFor :5
        }),
        plans: builder.mutation({
            query: (credential) =>({
                url:`${base_api}/${GET_PLANS}`,
                method:`POST`,
                body:{country_id :101, registration_type:[1,2]}
            }),
        })
    })
}) 
export const { useGetPlansQuery, usePlansMutation} = registrationApiSlice;