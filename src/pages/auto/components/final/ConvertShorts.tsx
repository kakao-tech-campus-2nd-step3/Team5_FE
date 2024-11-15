import { useEffect, useState } from 'react';

import styled from 'styled-components';

import { fetchSelectHighlight } from '@/pages/auto/apis';
import type { fetchSelectHighlightResponseProps } from '@/pages/auto/apis';
import { ShortsVideo } from '@/pages/auto/components';

const categoryMap: Record<number, string> = {
  0: '음악',
  1: '여행',
  2: '게임',
  3: '스포츠',
  4: '음식',
};

type ConvertShortsProps = {
  onSelectVideo: (index: number, title: string, category_id: number) => void;
};

const ConvertShorts = ({ onSelectVideo }: ConvertShortsProps) => {
  const [response, setResponse] =
    useState<fetchSelectHighlightResponseProps | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

  const categoryId = response?.dto?.categoryId;
  const categoryName = categoryMap[categoryId ?? -1] || 'Unknown';
  const title = response?.dto?.title;

  const urls = response?.urls ?? [];

  const handleVideoClick = (
    index: number,
    title: string,
    categoryId: number
  ) => {
    setSelectedIndex(index);
    onSelectVideo(index, title, categoryId);
  };

  return (
    <ShortContainer>
      <IFrameCardWrapper>
        {urls.length > 0 ? (
          urls.map(([index, url]) => (
            <ShortsVideo
              key={index}
              url={url}
              isSelected={selectedIndex === index}
              onClick={() =>
                handleVideoClick(index, title ?? '', categoryId ?? -1)
              }
            />
          ))
        ) : (
          <SubText>No videos found</SubText>
        )}
      </IFrameCardWrapper>
      <TextContainer gap='80px'>
        <TextContainer gap='16px'>
          <MainTitle>{response?.dto?.title}</MainTitle>
          <CategoryBox>{categoryName}</CategoryBox>
        </TextContainer>
      </TextContainer>
    </ShortContainer>
  );
};

export default ConvertShorts;

const IFrameCardWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: auto;
  overflow: auto;
  margin-bottom: 20px;
`;

const ShortContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
