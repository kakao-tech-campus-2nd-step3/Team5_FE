import { motion } from 'framer-motion';
import styled from 'styled-components';

const MyPageHeader = () => {
  return (
    <>
      <HeaderSection>
        <UserText
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Admin 님, 환영합니다!
        </UserText>
        <TabMenu>
          <TabItem
            whileHover={{ scale: 1.1, color: '#000', translateY: -3 }}
            active
          >
            내 프로필
          </TabItem>
          <TabItem whileHover={{ scale: 1.1, color: '#000', translateY: -3 }}>
            DM
          </TabItem>
        </TabMenu>
      </HeaderSection>
    </>
  );
};

export default MyPageHeader;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
`;

const UserText = styled(motion.h2)`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.5px;
`;

const TabMenu = styled.div`
  display: flex;
  gap: 30px;
`;

const TabItem = styled(motion.div)<{ active?: boolean }>`
  font-size: 20px;
  padding-bottom: 6px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? '2px solid #000' : 'none')};
  font-weight: ${(props) => (props.active ? '600' : '400')};
  color: ${(props) => (props.active ? '#000' : '#888')};
  transition: color 0.2s ease-in-out;
`;
