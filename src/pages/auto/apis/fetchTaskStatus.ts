import { fetchFastInstance } from '@/apis/instance';

import { useQuery } from '@tanstack/react-query';

export type fetchTaskStatusResponseProps = {
  task_id: string;
  status: string;
};

const fetchTaskStatusPath = (task_id: string) => `/task-status/${task_id}`;

const fetchTaskStatus = async (
  task_id: string
): Promise<fetchTaskStatusResponseProps> => {
  const response = await fetchFastInstance.get<fetchTaskStatusResponseProps>(
    fetchTaskStatusPath(task_id)
  );
  return response.data;
};

export const usefetchTaskStatus = (task_id: string) => {
  const accessToken = localStorage.getItem('accessToken');
  // console.log('API 요청 시작');
  return useQuery<fetchTaskStatusResponseProps, Error>({
    queryKey: [fetchTaskStatusPath(task_id)],
    queryFn: () => fetchTaskStatus(task_id),
    enabled: !task_id && !!accessToken,
  });
};
