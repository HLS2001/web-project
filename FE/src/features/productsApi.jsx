
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery :fetchBaseQuery({baseUrl:"http://localhost:5000"}),
    endpoints:(builder)=>({
        getALLProducts:builder.query({
            query:(id)=>"products",

        }),
    }),
});

export const{ useGetALLProductsQuery}=productsApi;
