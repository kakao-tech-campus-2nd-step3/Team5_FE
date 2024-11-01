import styled from 'styled-components';

const MembershipStatus = () => {
  return (
    <>
      <MembershipWrapper>
        <MembershipInfo>
          <MembershipName>PRO 플랜 사용중</MembershipName>
          <RemainingTokens>48시간 남았어요!</RemainingTokens>
        </MembershipInfo>
        <TokenBar>
          <ProProgress style={{ width: '90%' }} />
        </TokenBar>
      </MembershipWrapper>
    </>
  );
};

export default MembershipStatus;

const MembershipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;

const MembershipInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const MembershipName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const RemainingTokens = styled.div`
  font-size: 16px;
  color: #4caf50;
`;

const TokenBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const ProProgress = styled.div`
  height: 100%;
  background-color: #4caf50;
  border-radius: 10px;
`;
