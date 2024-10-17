import {
  FaHome,
  FaRobot,
  FaClipboardList,
  FaUtensils,
  FaPlane,
  FaGamepad,
  FaMusic,
  FaBasketballBall,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Button } from '@/components';

import { useProcessContext } from '@/pages/auto/provider';
import { ProcessState } from '@/pages/auto/provider';

import Logo from '@/assets/logo.png';

const SidebarContainer = styled.div`
  width: 228px;
  min-width: 228px;
  background-color: #f9f9f9;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const NavItem = styled.div`
  margin-bottom: 10px;
`;

const CategoryTitle = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  color: #888;
`;

const CustomButton = styled(Button)`
  justify-content: flex-start !important;
  padding-left: 20px;
`;
const Divider = styled.div`
  height: 1px;
  background-color: #e5e5e5;
  margin: 10px 0;
`;

const navItems: Array<{
  label: string;
  icon: JSX.Element;
  path: string;
  action?: ProcessState;
}> = [
  { label: 'HOME', icon: <FaHome />, path: '/' },
  { label: '쇼츠 자동화', icon: <FaRobot />, path: '/auto', action: 'initial' },
  { label: '애널리틱스', icon: <FaClipboardList />, path: '/analytics' },
];

const categories = [
  { label: '음식', icon: <FaUtensils /> },
  { label: '여행', icon: <FaPlane /> },
  { label: '게임', icon: <FaGamepad /> },
  { label: '음악', icon: <FaMusic /> },
  { label: '스포츠', icon: <FaBasketballBall /> },
];

const Sidebar = () => {
  const { setProcessState } = useProcessContext();
  const navigate = useNavigate();

  const handleClick = (path: string, action?: ProcessState) => {
    if (action) setProcessState(action); // 상태 변경
    navigate(path); // 경로 이동
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <img src={Logo} alt='logo' width='100' />
      </LogoContainer>

      {navItems.map(({ label, icon, path, action }) => (
        <NavItem key={label}>
          <CustomButton
            variant='ghost'
            size='default'
            icon={icon}
            onClick={() => handleClick(path, action)}
          >
            {label}
          </CustomButton>
        </NavItem>
      ))}

      <br />
      <Divider />
      <br />

      <CategoryTitle>카테고리</CategoryTitle>

      {categories.map(({ label, icon }) => (
        <NavItem key={label}>
          <CustomButton variant='ghost' size='default' icon={icon}>
            {label}
          </CustomButton>
        </NavItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
