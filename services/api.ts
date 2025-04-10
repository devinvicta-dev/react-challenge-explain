import axios from "axios";

const AxiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// AxiosApi.interceptors.request.use(
//     (config) => {
//         // const token = localStorage.getItem('accessToken');

//         // if (token) {
//         //     config.headers.Authorization = `Bearer ${token}`;
//         // }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

export default AxiosApi;
