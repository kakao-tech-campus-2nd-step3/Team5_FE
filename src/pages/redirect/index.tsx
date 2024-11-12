import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { postOauthGoogle } from '@/pages/redirect/apis';

const RedirectPage = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (code && state) {
        try {
          const response = await postOauthGoogle({ code, state });
          const isFreshUser = response.is_fresh_user;

          console.log('isFreshUser', isFreshUser);
          if (isFreshUser) {
            localStorage.setItem('accessToken', response.access_token);
            localStorage.setItem('refreshToken', response.refresh_token);
            navigate('/add');
          } else {
            localStorage.setItem('accessToken', response.access_token);
            localStorage.setItem('refreshToken', response.refresh_token);
            navigate('/');
          }
        } catch (error) {
          console.error('OAuth Google 요청 실패:', error);
          // navigate('/error');
        }
      }
    };

    fetchData();
  }, [code, state, navigate]);

  return <></>;
};

export default RedirectPage;
