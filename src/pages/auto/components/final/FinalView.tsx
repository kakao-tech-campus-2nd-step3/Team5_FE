import { useState } from 'react';

import styled from 'styled-components';

import { Button } from '@/components';

import { fetchVideoExtract, postHighlightSelection } from '@/pages/auto/apis';
import { InitBtn } from '@/pages/auto/components';

import ConvertShorts from './ConvertShorts';

const FinalView = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [titles, setTitle] = useState<string | null>(null);

  const handleSelectVideo = (
    index: number,

    title: string,
    category_id: number
  ) => {
    setSelectedIndex(index);
    setCategoryId(category_id);
    setTitle(title);
  };

  const handleUpload = async () => {
    if (selectedIndex === null) {
      alert('비디오를 선택해주세요.');
      return;
    }

    const memberId = parseInt(sessionStorage.getItem('member_id') ?? '0', 10);
    const title = titles ?? '';

    // const pythonDto = {
    //   url: sessionStorage.getItem('initialUrl') ?? '',
    //   email,
    //   title,
    //   memberId,
    //   categoryId: categoryId ?? 0,
    // };

    try {
      // console.log({ index: selectedIndex, s3Url: selectedUrl, pythonDto });
      const response = await postHighlightSelection({
        index: selectedIndex,
        fileName: sessionStorage.getItem('task_id') ?? '',
        title,
        memberId,
        categoryId: categoryId ?? 0,
      });

      const videoId = response.videoId;
      console.log('Video ID:', videoId);

      // videoId로 다운로드 URL 받기
      const extractResponse = await fetchVideoExtract(videoId); // videoId를 string으로 변환하여 전달

      // URL을 통해 비디오 다운로드 (예시)
      const link = document.createElement('a');
      link.href = extractResponse;
      link.download = 'video.mp4';
      link.click();

      alert('비디오 업로드 성공');
      console.log('Response:', response);
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('업로드 중 오류가 발생했습니다.');
    }
  };

  return (
    <ViewContainer>
      <ConvertShorts onSelectVideo={handleSelectVideo} />
      <ButtonWrapper>
        <Button variant='default' type='button' onClick={handleUpload}>
          추출하기 및 업로드
        </Button>
        <InitBtn />
      </ButtonWrapper>
    </ViewContainer>
  );
};

export default FinalView;

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 864px;
  height: 616px;
  justify-content: center;
  align-items: center;
  gap: 76px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;
