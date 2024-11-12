import { fetchInstance } from '@/apis';

export type ReissueProps = {
  refreshToken: string;
};

export type ReissueResponse = {
  accessToken: string;
  refreshToken: string;
  isFreshUser: boolean;
};

const postReissuePath = () => '/api/reissue';

export const postReissue = async ({
  refreshToken,
}: ReissueProps): Promise<ReissueResponse> => {
  const response = await fetchInstance.patch(postReissuePath(), null, {
    headers: {
      Refresh: `Bearer ${refreshToken}`,
    },
  });
  return response.data;
};
