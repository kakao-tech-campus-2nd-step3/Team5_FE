import { fetchFastInstance } from '@/apis/instance';

export type fetchSelectHighlightResponseProps = {
  urls: [number, string][];
  dto: fetchSelectHighlightDTO;
};

export type fetchSelectHighlightDTO = {
  url: string;
  email: string;
  title: string;
  memberId: number;
  categoryId: number;
};

const fetchSelectHighlightPath = (task_id: string) =>
  `/select-highlight/${task_id}`;

export const fetchSelectHighlight = async (
  task_id: string
): Promise<fetchSelectHighlightResponseProps> => {
  const response =
    await fetchFastInstance.get<fetchSelectHighlightResponseProps>(
      fetchSelectHighlightPath(task_id)
    );
  return response.data;
};
