import axios, { type  AxiosInstance } from "axios";

export const apiInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
})