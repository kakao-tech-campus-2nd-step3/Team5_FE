import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileMenu: React.FC = () => {
  return (
    <DropdownContainer>
      <DropdownMenu
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Link to='/myPage'>
          <MenuItem>내 정보 수정</MenuItem>
        </Link>
        <MenuItem>로그아웃</MenuItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default ProfileMenu;

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const DropdownMenu = styled(motion.div)`
    position: absolute;
    top: 20px;
    right: 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 16px;
    z-index: 100;
    min-width: 120px; 
`;

const MenuItem = styled.div`
    padding: 12px 0;
    font-size: 14px;
    color: #333;
    white-space: nowrap;
    letter-spacing: 1px;
    cursor: pointer;

    &:not(:last-child) {
        border-bottom: 1px solid #eee;
    }
`;