import { fetchFastInstance } from '@/apis';

export type hightlightSelectionRequestProps = {
  index: number;
  task_id: string;
};

export type hightlightSelectionResponseProps = {
  message: string;
  video_id: number;
};

const postHighlightSelectionPath = () => '/select-highlight';

export const postHighlightSelection = async ({
  index,
  task_id,
}: hightlightSelectionRequestProps): Promise<hightlightSelectionResponseProps> => {
  const response = await fetchFastInstance.post(postHighlightSelectionPath(), {
    index,
    task_id,
  });

  return response.data;
};
