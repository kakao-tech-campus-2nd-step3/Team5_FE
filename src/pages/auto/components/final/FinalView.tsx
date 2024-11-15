import { useState } from 'react';

import styled from 'styled-components';

import { Button, Spinner } from '@/components';

import { fetchVideoExtract, postHighlightSelection } from '@/pages/auto/apis';
import { InitBtn } from '@/pages/auto/components';

import ConvertShorts from './ConvertShorts';

const FinalView = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelectVideo = (index: number) => {
    setSelectedIndex(index);
  };

  const handleUpload = async () => {
    if (selectedIndex === null) {
      alert('비디오를 선택해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await postHighlightSelection({
        index: selectedIndex,
        task_id: sessionStorage.getItem('task_id') ?? '',
      });

      alert('비디오 업로드 중입니다. 잠시만 기다려주세요.');

      const videoId = response.video_id;
      console.log('Video ID:', videoId);

      // // Presigned URL을 통해 다운로드 링크 가져오기
      const downloadUrl = await fetchVideoExtract(videoId);
      if (!downloadUrl) {
        throw new Error('Failed to fetch video download URL');
      }

      console.log('Download URL:', downloadUrl);
      // 새로운 창에서 다운로드
      const downloadWindow = window.open('', '_blank');
      if (!downloadWindow) {
        alert('팝업 차단이 되어 있는 것 같습니다. 팝업 차단을 해제해주세요.');
        return;
      }

      // 새로운 창에서 다운로드를 위한 <a> 태그 생성
      const anchor = downloadWindow.document.createElement('a');
      anchor.href = downloadUrl;
      anchor.target = '_self'; // 새 창 내에서 동작하도록 설정
      anchor.download = 'video.mp4'; // 다운로드 파일명 설정
      anchor.click();

      alert('비디오 업로드 성공');
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('업로드 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false); // 로딩 완료
    }
  };

  return (
    <ViewContainer>
      <ConvertShorts onSelectVideo={handleSelectVideo} />
      <ButtonWrapper>
        <Button variant='default' type='button' onClick={handleUpload}>
          {isLoading ? <Spinner /> : '추출하기 및 업로드'}
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
