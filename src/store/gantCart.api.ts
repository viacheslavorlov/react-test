import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { Chart, Sub, Sub2, Sub3, Sub4, IResponse} from "../models/responseInterface";


// const response = fetch('http://82.202.204.94/tmp/test.php', {
//     headers: {
//        'Access-Control-Allow-Origin': 'http://localhost:3000/'
//     }
// })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
// console.log(response)

export const gantCart = createApi({
    reducerPath: 'gantCart/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://82.202.204.94/',


    }),
    refetchOnFocus: true,
    endpoints: build => ({

        getData: build.query<IResponse, string>({
            query: () => ({
                url: `tmp/test.php`,
                // mode: "cors",
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': 'true'
                }
            })
        })
    })
});

export const {useGetDataQuery} = gantCart;