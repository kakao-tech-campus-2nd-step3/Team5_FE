import styled from 'styled-components';
import { FaHome, FaRobot, FaClipboardList, FaUtensils, FaPlane, FaGamepad, FaMusic, FaBasketballBall } from 'react-icons/fa';
import { Button } from '@/components/common/button';
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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <img src={Logo} alt="logo" width="100" />
      </LogoContainer>

      <NavItem>
        <CustomButton variant="ghost" size="default" icon={<FaHome />}>
          HOME
        </CustomButton>
      </NavItem>
      <NavItem>
        <CustomButton variant="ghost" size="default" icon={<FaRobot />}>
          쇼츠 자동화
        </CustomButton>
      </NavItem>
      <NavItem>
        <CustomButton variant="ghost" size="default" icon={<FaClipboardList />}>
          애널리틱스
        </CustomButton>
      </NavItem>

      <br />
      <Divider />  
      <br />

      <CategoryTitle>카테고리</CategoryTitle>
      <NavItem>
        <CustomButton variant="ghost" size="default" icon={<FaUtensils />}>
          음식
        </CustomButton>
      </NavItem>
      <NavItem>
        <CustomButton variant="ghost" size="default" icon={<FaPlane />}>
          여행
        </CustomButton>
      </NavItem>
      <NavItem>
        <CustomButton variant="ghost" size="default" icon={<FaGamepad />}>
          게임
        </CustomButton>
      </NavItem>
      <NavItem>
        <CustomButton variant="ghost" size="default" icon={<FaMusic />}>
          음악
        </CustomButton>
      </NavItem>
      <NavItem>
        <CustomButton variant="ghost" size="default" icon={<FaBasketballBall />}>
          스포츠
        </CustomButton>
      </NavItem>
    </SidebarContainer>
  );
};

export default Sidebar;