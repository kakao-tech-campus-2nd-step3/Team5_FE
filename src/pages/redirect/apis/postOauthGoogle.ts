import { fetchInstance } from '@/apis';

export type RedirectProps = {
  state: string;
  code: string;
};

export type ResponseProps = {
  access_token: string;
  refresh_token: string;
  is_fresh_user: boolean;
};

const postOauthGooglePath = () => '/oauth/google';

export const postOauthGoogle = async ({
  code,
  state,
}: RedirectProps): Promise<ResponseProps> => {
  const response = await fetchInstance.post(postOauthGooglePath(), {
    code,
    state,
  });

  return response.data;
};
