import { BOOKING_URL, DOCTORS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const doctorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: ({
        keyWord,
        specialty,
        street,
        city,
        state,
        postalCode,
        country,
        sortBy,
      }) => ({
        url: DOCTORS_URL,
        params: {
          keyWord, // Search by name
          specialty, // Search by specialty
          street, // Filter by street
          city, // Filter by city
          state, // Filter by state
          postalCode, // Filter by postalCode
          country, // Filter by country
          sortBy, // Sorting parameter
        },
      }),
      providesTags: ['Doctor'],
      keepUnusedDataFor: 5, // Cache time for unused data
    }),

    getdoctorDetail: builder.query({
      query: (doctorId) => ({
        url: `${DOCTORS_URL}/${doctorId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    bookDoctor: builder.mutation({
      query: ({ doctorId, date, time, userId }) => ({
        url: `${BOOKING_URL}/book/${doctorId}`,
        method: 'POST',
        body: { date, time, userId },
      }),
      invalidatesTags: ['Doctor'],
    }),

    createBooking: builder.mutation({
      query: ({ date, time, userId, doctorId }) => ({
        url: `${BOOKING_URL}/createBooking`, // Corrected URL path here
        method: 'POST',
        body: { date, time, userId, doctorId }, // Added doctorId to the request body
      }),
      invalidatesTags: ['Booking'], // You might need to define this tag in your reducer to ensure it gets invalidated correctly.
    }),
    getAppointments: builder.query({
      query: (userId) => ({
        url: `${BOOKING_URL}/appointments/${userId}`,
        method: 'GET',
      }),
      providesTags: ['Booking'],
    }),
    getAppointmentsForDoctor: builder.query({
      query: (doctorId) => ({
        url: `${BOOKING_URL}/appointments/${doctorId}`, // Ensure the backend route matches this path
        method: 'GET',
      }),
      providesTags: ['Booking'],
    }),
    cancelAppointment: builder.mutation({
      query: (appointmentId) => ({
        url: `${BOOKING_URL}/appointments/${appointmentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Booking'], // Invalidate the Booking cache to reflect the cancellation
    }),
    createDoctor: builder.mutation({
      query: (doctorData) => ({
        url: DOCTORS_URL,
        method: 'POST',
        body: doctorData, // Assuming you are passing the doctor data in the request body.
      }),
      invalidatesTags: ['Doctor'], // Invalidates the 'Doctor' cache to fetch fresh data after adding a new doctor.
    }),
    payForBookingCash: builder.mutation({
      query: (bookingId) => ({
        url: `${BOOKING_URL}/pay/${bookingId}`, // Ensure the route matches the one on the server
        method: 'POST',
        body: { bookingId }, // Send the booking ID in the request body
      }),
      invalidatesTags: ['Booking'], // Invalidate the Booking cache to reflect the paid status
    }),
  }),
})

export const {
  useGetDoctorsQuery,
  useGetdoctorDetailQuery,
  useCreateBookingMutation,
  useGetAppointmentsQuery,
  useGetAppointmentsForDoctorQuery,
  useCancelAppointmentMutation, // Corrected hook name for creating a booking
  useCreateDoctorMutation,
  usePayForBookingCashMutation,
} = doctorApiSlice
