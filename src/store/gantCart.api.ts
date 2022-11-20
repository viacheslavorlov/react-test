import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IResponse} from "../models/responseInterface";


export const gantCart = createApi({
    reducerPath: 'gantCart/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        getData: build.query<IResponse, string>({
            query: (url) => ({
                url: url
            })
        })
    })
});

export const {useGetDataQuery} = gantCart;