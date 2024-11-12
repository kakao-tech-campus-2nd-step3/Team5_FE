import { useEffect } from 'react';

import styled from 'styled-components';

import { Header, ShortsGrid } from '@/components';

import { Categories } from '@/pages/main/utils';

import { detectUserAgent } from '@/utils/detectUserAgent';
import {
  openLinkInKakaoExternal,
  openLinkInSupportedBrowsers,
} from '@/utils/openLinkExternalBrowser';

const MainPage = () => {
  useEffect(function RedirectByUserAgent() {
    const signInUrl = 'http://localhost:5173';
    if (detectUserAgent() === 'KAKAOTALK') {
      openLinkInKakaoExternal(signInUrl);
    } else if (detectUserAgent() !== 'DEFAULT') {
      openLinkInSupportedBrowsers(signInUrl);
    }
  }, []);

  return (
    <>
      <Header />
      {Categories.map((category) => (
        <CategoryTitle key={category.id}>
          {category.name}
          <ShortsGrid categoryId={category.id} />
        </CategoryTitle>
      ))}
    </>
  );
};

export default MainPage;

const CategoryTitle = styled.h2`
  margin: 20px 25px;
  font-size: 24px;
  font-weight: bold;
`;
