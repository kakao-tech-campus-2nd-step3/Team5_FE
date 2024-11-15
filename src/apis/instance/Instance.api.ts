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
    timeout: 10000,
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
      const isReissueRequest = config.url?.includes('/api/reissue');

      if (accessToken && !isReissueRequest) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error: unknown) => Promise.reject(error)
  );

  // console.log(instance.interceptors.response);

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const { config, response } = error;
      if (response.status === 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        // console.log('Refresh token:', refreshToken);
        if (refreshToken) {
          try {
            const data = await postReissue({ refreshToken });
            // console.log('Reissue success:', data);

            localStorage.setItem('accessToken', data.access_token);
            localStorage.setItem('refreshToken', data.refresh_token);

            config.headers['Authorization'] = `Bearer ${data.access_token}`;
            return axios(config);
          } catch (reissueError) {
            // console.log('Reissue failed:', reissueError);
            return Promise.reject(reissueError);
          }
        } else {
          console.error('No refresh token found');
          return Promise.reject(error);
        }
      }

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
