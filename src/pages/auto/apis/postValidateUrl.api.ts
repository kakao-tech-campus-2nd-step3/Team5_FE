import { fetchInstace } from '@/apis';


export type ValidateUrlProps = {
  title: string;
  user: string;
  url: string;
};

export type UrlOnlyProps = Pick<ValidateUrlProps, 'url'>;

const postValidateUrlPath = () => '/api/videos/youtube-url-validation';

export const postValidateUrl = async (
  url: UrlOnlyProps
): Promise<ValidateUrlProps> => {
  const response = await fetchInstance.post(postValidateUrlPath(), url);

  return response.data;
};
