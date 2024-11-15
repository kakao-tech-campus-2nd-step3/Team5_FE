import { fetchInstance } from '@/apis';

export type ReissueProps = {
  refreshToken: string;
};

export type ReissueResponse = {
  access_token: string;
  refresh_token: string;
  is_fresh_user: boolean;
};

const postReissuePath = () => '/api/reissue';

export const postReissue = async ({
  refreshToken,
}: ReissueProps): Promise<ReissueResponse> => {
  const response = await fetchInstance.post(
    postReissuePath(),
    {},
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );
  return response.data;
};
