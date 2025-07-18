// import axios, { AxiosError } from 'axios';
// import type {
//   ApiResponse,
//   BookingRequest,
//   TimeSlot,
//   ZoneData,
//   ZoneKey,
// } from '../components/types/booking';

// const API_BASE_URL = 'http://localhost:4000';

// interface ApiErrorResponse {
//   message?: string;
// }

// type ApiError = AxiosError<ApiErrorResponse>;

// export const getZoneData = async (
//   zoneId: ZoneKey
// ): Promise<ApiResponse<ZoneData>> => {
//   try {
//     const response = await axios.get<ZoneData>(
//       `${API_BASE_URL}/zones/${zoneId}`
//     );
//     return { success: true, data: response.data };
//   } catch (error) {
//     const err = error as ApiError;
//     console.error('Ошибка при загрузке данных зоны:', err.message);
//     return {
//       success: false,
//       error: err.response?.data?.message || 'Ошибка загрузки данных зоны',
//     };
//   }
// };

// export const getAvailableTimeSlots = async (
//   zoneId: ZoneKey,
//   date: string
// ): Promise<ApiResponse<TimeSlot[]>> => {
//   try {
//     const response = await axios.get<TimeSlot[]>(
//       `${API_BASE_URL}/zones/${zoneId}/timeslots?date=${date}`
//     );
//     return { success: true, data: response.data };
//   } catch (error) {
//     const err = error as ApiError;
//     console.error('Ошибка при загрузке слотов времени:', err.message);
//     return {
//       success: false,
//       error:
//         err.response?.data?.message ||
//         'Ошибка загрузки доступных временных слотов',
//     };
//   }
// };

// export const createBooking = async (
//   bookingData: BookingRequest
// ): Promise<ApiResponse<{ bookingId: string }>> => {
//   try {
//     const response = await axios.post<{ id: string }>(
//       `${API_BASE_URL}/bookings`,
//       bookingData
//     );
//     return { success: true, data: { bookingId: response.data.id } };
//   } catch (error) {
//     const err = error as ApiError;
//     console.error('Ошибка при создании брони:', err.message);
//     return {
//       success: false,
//       error: err.response?.data?.message || 'Ошибка создания бронирования',
//     };
//   }
// };
