import axios from 'axios';

import shorts_img from '@/assets/shorts_img.png';

import { useInfiniteQuery } from '@tanstack/react-query';

interface Short {
  id: string;
  title: string;
  thumbnail: string;
}

interface FetchShortsResponse {
  data: Short[];
  nextPage: number | null;
}

// const fetchShorts = async ({
//   pageParam = 1,
// }: {
//   pageParam: number;
// }): Promise<FetchShortsResponse> => {
//   const response = await axios.get(`/api/shorts?page=${pageParam}`);
//   return response.data;
// };

// 더미 데이터를 반환하는 fetchShorts 함수
const fetchShorts = async ({
  pageParam = 1,
}: {
  pageParam: number;
}): Promise<FetchShortsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: `short-${pageParam}`,
            title: `Example Dummy data ${pageParam}`,
            thumbnail: shorts_img,
          },
        ],
        nextPage: pageParam < 50 ? pageParam + 1 : null,
      });
    }, 200);
  });
};

export const useFetchShorts = () => {
  return useInfiniteQuery<FetchShortsResponse, Error>({
    queryKey: ['shorts'],
    queryFn: ({ pageParam = 1 }) =>
      fetchShorts({ pageParam: pageParam as number }),
    getNextPageParam: (lastPage: FetchShortsResponse) => lastPage.nextPage,
    initialPageParam: 1,
  });
};
