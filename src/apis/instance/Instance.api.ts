import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';

import { postReissue } from '@/apis/auth';

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

      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error: unknown) => {
      return Promise.reject(error);
    }
  );

  // instance.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     console.log(error);
  //     const { config, response } = error;
  //     if (response.status === 401) {
  //       const refreshToken = localStorage.getItem('refreshToken');

  //       if (refreshToken) {
  //         try {
  //           const data = await postReissue({ refreshToken });
  //           console.log('Reissue success:', data);

  //           localStorage.setItem('accessToken', data.accessToken);
  //           localStorage.setItem('refreshToken', data.refreshToken);

  //           config.headers['Authorization'] = `Bearer ${data.accessToken}`;
  //           return axios(config);
  //         } catch (reissueError) {
  //           console.error('Reissue failed:', reissueError);
  //           return Promise.reject(reissueError);
  //         }
  //       } else {
  //         console.error('No refresh token found');
  //         return Promise.reject(error);
  //       }
  //     }

  //     return Promise.reject(error);
  //   }
  // );

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
