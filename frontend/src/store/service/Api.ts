import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../../Api'
import { ResponseProfile } from '../../@types/@types'

export const Api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl:baseURL , credentials: 'include' }),
    endpoints: (builder) => ({
        getProfile: builder.query<ResponseProfile, string>({
            query:(args:string)=>`/${args}`,
        })
    }),

})


export const { useGetProfileQuery } = Api
