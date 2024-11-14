import { fetchInstance } from '@/apis';

export type hightlightSelectionRequestProps = {
  index: number;
  fileName: string;
  title: string;
  memberId: number;
  categoryId: number;
};

// export type PythonDTO = {
//   url: string;
//   email: string;
//   title: string;
//   memberId: number;
//   categoryId: number;
// };

export type hightlightSelectionResponseProps = {
  videoId: number;
  thumbnail: string;
  title: string;
  memberId: number;
  createdAt: Date;
};

const postHighlightSelectionPath = () => '/api/videos/highlight-selection';

export const postHighlightSelection = async ({
  index,
  fileName,
  title,
  memberId,
  categoryId,
}: hightlightSelectionRequestProps): Promise<hightlightSelectionResponseProps> => {
  const response = await fetchInstance.post(postHighlightSelectionPath(), {
    index,
    fileName,
    title,
    memberId,
    categoryId,
  });

  return response.data;
};
