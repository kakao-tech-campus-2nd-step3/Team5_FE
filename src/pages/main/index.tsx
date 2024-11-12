import { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';

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
      <MainContents id='scrollContainer'>
        {Categories.map((category) => (
          <Element name={category.name} key={category.id}>
            <CategorySection>
              <CategoryTitle>
                <CategoryIndicator />
                {category.name}
              </CategoryTitle>
              <ShortsGrid categoryId={category.id} />
            </CategorySection>
          </Element>
        ))}
      </MainContents>
    </>
  );
};

export default MainPage;

const MainContents = styled.div`
  padding: 20px;
  width: 100%;
  height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategorySection = styled.div`
  margin: 20px 25px;
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CategoryIndicator = styled.span`
  width: 8px;
  height: 28px;
  background-color: #ff6b6b;
  border-radius: 4px;
  margin-right: 10px;
`;
