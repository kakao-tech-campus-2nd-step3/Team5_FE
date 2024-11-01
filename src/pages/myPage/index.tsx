import styled from 'styled-components';

import MyPageHeader from '@/pages/myPage/components/Header';
import MembershipStatus from '@/pages/myPage/components/MembershipStatus';
import ProfileEditForm from '@/pages/myPage/components/ProfileEditForm';
import VideoManagement from '@/pages/myPage/components/VideoManagement';

const MyProfilePage = () => {
  return (
    <MyPageContainer>
      <MyPageHeader />
      <WhiteSpace />
      <MembershipStatus />
      <WhiteSpace />
      <ProfileEditForm />
      <WhiteSpace />
      <VideoManagement />
    </MyPageContainer>
  );
};

export default MyProfilePage;

const MyPageContainer = styled.div`
  padding: 30px;
  width: 100%;
`;

const WhiteSpace = styled.br``;
