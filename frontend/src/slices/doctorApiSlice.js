import { BOOKING_URL, DOCTORS_URL } from "../constants";

import { apiSlice } from "./apiSlice";

export const doctorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: ({ keyWord, specialty }) => ({
        url: DOCTORS_URL,
        params: {
          keyWord,
          specialty,
        },
      }),
      providesTags: ['Doctor'],
      keepUnusedDataFor: 5,
    }),
    getdoctorDetail: builder.query({
      query: (doctorId) => ({
        url: `${DOCTORS_URL}/${doctorId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    bookDoctor: builder.mutation({
      query: ({ doctorId, date, time, userId }) => ({
        url: `${DOCTORS_URL}/${doctorId}/book`,
        method: 'POST',
        body: { date, time, userId },
      }),
      invalidatesTags: ['Doctor'],
    }),
    createDoctor: builder.mutation({
      query: (doctorId) => ({
        url: DOCTORS_URL,
        method: 'POST',
      }),

      invalidatesTags: ['Product'],
    }),
  }),
})
export const{useGetDoctorsQuery,useGetdoctorDetailQuery,useCreateDoctorMutation}=doctorApiSlice