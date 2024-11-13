import { fetchFastInstance } from '@/apis';

export type ExtractHighlightProps = {
  url: string;
  email: string;
  title: string;
  memberId: number;
  categoryId: number;
};

export type ExtractHighlightResponseProps = {
  message: string;
  task_id: string;
};

const postConvertFormPath = () => '/extract-hightlights';

export const postConvertForm = async ({
  url,
  email,
  title,
  memberId,
  categoryId,
}: ExtractHighlightProps): Promise<ExtractHighlightResponseProps> => {
  const response = await fetchFastInstance.post(postConvertFormPath(), {
    url,
    email,
    title,
    memberId,
    categoryId,
  });

  return response.data;
};
