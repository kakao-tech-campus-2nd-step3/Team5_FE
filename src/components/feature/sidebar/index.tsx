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
import { Link } from 'react-scroll';

import styled from 'styled-components';

import {
  Button,
  StatusDot,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components';

import { useProcessContext, ProcessState } from '@/pages/auto/provider';

import Logo from '@/assets/logo.png';

import { TooltipProvider } from '@radix-ui/react-tooltip';

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
  path?: string;
  action?: ProcessState;
}> = [
  { label: 'HOME', icon: <FaHome />, path: '/' },
  { label: '쇼츠 자동화', icon: <FaRobot />, path: '/auto' },
  { label: '애널리틱스', icon: <FaClipboardList /> },
];

const categories = [
  { id: 1, label: '음식', icon: <FaUtensils /> },
  { id: 2, label: '여행', icon: <FaPlane /> },
  { id: 3, label: '게임', icon: <FaGamepad /> },
  { id: 4, label: '음악', icon: <FaMusic /> },
  { id: 5, label: '스포츠', icon: <FaBasketballBall /> },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const { processState, setProcessState } = useProcessContext();
  // console.log(processState);

  const handleClick = (path: string) => {
    // 현재 위치가 '/auto' 페이지이고, processState가 final일 경우 경고창 표시
    if (location.pathname === '/auto' && processState === 'final') {
      const userConfirmed = window.confirm(
        '⚠️ 영상 변환이 완료된 상태입니다. 페이지를 이동하면 데이터가 손실될 수 있습니다. 이동하시겠습니까?'
      );
      if (!userConfirmed) return;

      setProcessState('initial');
    }

    // 페이지 이동
    navigate(path);
  };

  const renderStatusDot = () => {
    if (processState === 'initial') {
      return <StatusDot status='idle' size={10} />;
    }
    if (processState === 'progress') {
      return <StatusDot status='processing' size={10} />;
    }
    if (processState === 'final') {
      return <StatusDot status='success' size={10} />;
    }
    return null;
  };

  const renderTooltipMessage = () => {
    if (processState === 'progress') {
      return '변환 중이에요!';
    }
    if (processState === 'final') {
      return '영상 변환이 완료되었어요!';
    }
    return '';
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <img src={Logo} alt='logo' width='100' />
      </LogoContainer>

      <TooltipProvider>
        {navItems.map(({ label, icon, path }) => (
          <NavItem key={label}>
            <CustomButton
              variant='ghost'
              size='default'
              icon={icon}
              onClick={() => path && handleClick(path)}
            >
              {label}
              {label === '쇼츠 자동화' && (
                <div style={{ marginLeft: '8px', display: 'inline-block' }}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>{renderStatusDot()}</div>
                    </TooltipTrigger>
                    <TooltipContent side='top'>
                      {renderTooltipMessage()}
                    </TooltipContent>
                  </Tooltip>
                </div>
              )}
            </CustomButton>
          </NavItem>
        ))}
      </TooltipProvider>

      <br />
      <Divider />
      <br />

      <CategoryTitle>카테고리</CategoryTitle>

      {categories.map(({ label, icon }) => (
        <NavItem key={label}>
          <Link
            to={label}
            smooth={true}
            spy={true}
            duration={500}
            offset={-80}
            containerId='scrollContainer'
          >
            <CustomButton variant='ghost' size='default' icon={icon}>
              {label}
            </CustomButton>
          </Link>
        </NavItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
