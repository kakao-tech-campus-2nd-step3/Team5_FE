import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { LazyLoadImg } from '@/components';

import { fetchSelectHighlight } from '@/pages/auto/apis';
import type { fetchSelectHighlightResponseProps } from '@/pages/auto/apis';

import conver_img from '@/assets/convert_img.png';

const ConvertShorts = () => {
  const [response, setResponse] =
    useState<fetchSelectHighlightResponseProps | null>(null);
  const taskId = sessionStorage.getItem('task_id');

  // taskId가 있을 때만 API 요청
  useEffect(() => {
    const fetchData = async () => {
      if (taskId) {
        try {
          const data = await fetchSelectHighlight(taskId);
          setResponse(data);
          // console.log('response:', data);
        } catch (error) {
          console.error('Error fetching highlight data:', error);
        }
      }
    };

    fetchData();
  }, [taskId]);

  return (
    <ShortContainer>
      <LazyLoadImg image={{ src: conver_img, alt: '' }} />

      <TextContainer gap='80px'>
        <TextContainer gap='16px'>
          <MainTitle>{response?.dto?.title}</MainTitle>
          <SubText>5JoSama</SubText>
          <CategoryBox>Fashion</CategoryBox>
        </TextContainer>
        <TextContainer gap='8px'>
          <MainTitle>Keywords</MainTitle>
          <TextContainer>
            <SubText>쇼핑</SubText>
            <SubText>패션</SubText>
            <SubText>쇼핑몰</SubText>
            <SubText>옷</SubText>
          </TextContainer>
        </TextContainer>
      </TextContainer>
    </ShortContainer>
  );
};

export default ConvertShorts;

const ShortContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  gap: 63px;
`;

const TextContainer = styled.div<{ gap?: string }>`
  gap: ${(props) => props.gap || '0px'};
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.strong`
  color: #1e1e1e;
  font-size: 24px;
  font-weight: bold;
`;

const SubText = styled.span`
  color: #757575;
  font-size: 16px;
`;

const CategoryBox = styled.div`
  background-color: #cff7d3;
  color: #02542d;
  padding: 8px;
  font-size: 16px;
  width: fit-content;
  border-radius: 8px;
`;
