import styled from 'styled-components';

import { useFetchMyInfo } from '@/pages/myPage/apis/fetchMyInfo';
import MyPageHeader from '@/pages/myPage/components/Header';
import MembershipStatus from '@/pages/myPage/components/MembershipStatus';
import MyInfoDisplay from '@/pages/myPage/components/MyInfoDisplay';
import ProfileEditForm from '@/pages/myPage/components/ProfileEditForm';

// import VideoManagement from '@/pages/myPage/components/VideoManagement';

const MyProfilePage = () => {
  const { refetch } = useFetchMyInfo();

  return (
    <MyPageContainer>
      <MyPageHeader />
      <WhiteSpace />
      <MembershipStatus />
      <WhiteSpace />
      <MyInfoDisplay />
      <WhiteSpace />
      <ProfileEditForm refetchMyInfo={refetch} />
      <WhiteSpace />
      {/* <VideoManagement /> */}
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
