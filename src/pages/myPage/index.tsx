import styled from 'styled-components';

import { useFetchMyInfo } from '@/pages/myPage/apis/fetchMyInfo';
import MyPageHeader from '@/pages/myPage/components/Header';
import MembershipStatus from '@/pages/myPage/components/MembershipStatus';
import MyInfoDisplay from '@/pages/myPage/components/MyInfoDisplay';
import ProfileEditForm from '@/pages/myPage/components/ProfileEditForm';
import VideoManagement from '@/pages/myPage/components/VideoManagement';

const MyProfilePage = () => {
  const { refetch } = useFetchMyInfo();

  return (
    <MyPageContainer>
      <MyPageHeader />
      <MembershipStatus />
      <WhiteSpace />
      <ContentWrapper>
        <LeftSection>
          <ProfileEditForm refetchMyInfo={refetch} />
        </LeftSection>
        <RightSection>
          <MyInfoDisplay />
        </RightSection>
      </ContentWrapper>
      <WhiteSpace />
      <VideoManagement />
    </MyPageContainer>
  );
};

export default MyProfilePage;

const MyPageContainer = styled.div`
  padding: 30px;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;

const WhiteSpace = styled.br``;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 40px;
  margin-top: 40px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
`;