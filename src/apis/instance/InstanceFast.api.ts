import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig, // InternalAxiosRequestConfig,
} from 'axios';

// import { postReissue } from '@/apis/auth';
import { BASE_FAST_URL } from '@/constants/URI';

const isMSWEnvironment = import.meta.env.VITE_RUN_MSW === 'true';

const fastBaseURL = isMSWEnvironment
  ? 'http://localhost:5173'
  : `${BASE_FAST_URL}`;

export const createFastInstance = (
  config: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create({
    timeout: 15000,
    withCredentials: true,
    ...config,
    baseURL: fastBaseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420',
      ...config.headers,
    },
  });

  return instance;
};

export const fetchFastInstance = createFastInstance({});
