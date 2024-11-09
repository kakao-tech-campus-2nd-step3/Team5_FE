import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';

import { BASE_URL } from '@/constants/URI';

import { QueryClient } from '@tanstack/react-query';

const isMSWEnvironment = import.meta.env.VITE_RUN_MSW === 'true';

const baseURL = isMSWEnvironment ? 'http://localhost:5173' : `${BASE_URL}`;

export const createInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create({
    timeout: 5000,
    ...config,
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken !== undefined) {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error: unknown) => {
      return Promise.reject(error);
    }
  );
  return instance;
};

export const fetchInstance = createInstance({});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});
