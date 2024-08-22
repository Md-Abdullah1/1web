import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_api } from '../Api';
 

const baseQuery = fetchBaseQuery({ 
    baseUrl: base_api,
    prepareHeaders : (headers , {getState}) =>{
        const token = localStorage.getItem("token")
        if(token){
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes:["Country", "Plans"],
    endpoints : (builder) =>({

    })
})