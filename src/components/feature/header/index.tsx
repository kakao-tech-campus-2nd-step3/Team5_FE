import { useEffect, useState } from 'react';

import styled from 'styled-components';

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Input,
  Button,
} from '@/components';
import ProfileMenu from '@/components/feature/menu/ProfileMenu';

import { useFetchMyData } from '@/apis';

import { BASE_URL } from '@/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLogin = Boolean(localStorage.getItem('accessToken'));
  const { data } = useFetchMyData();

  useEffect(() => {
    if (data) {
      sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('image_url', data.image_url);
    }
  }, [data]);

  const GoogleLoginUrl = `${BASE_URL}/api/login`;
  const google_login = () => {
    window.open(GoogleLoginUrl, '_self');
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      <Wrapper>
        <ChildWrapper>
          <InputWrapper>
            <Input type='search' placeholder='검색하세요.' />
          </InputWrapper>
          <BtnWrapper>
            <Button size='sm' variant='default'>
              검색
            </Button>
          </BtnWrapper>
        </ChildWrapper>

        {isLogin ? (
          <ChildWrapper onClick={toggleMenu}>
            <Avatar>
              <AvatarImage src={data?.image_url} alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Name>{data?.username}</Name>
            <Menu>{isMenuOpen && <ProfileMenu />}</Menu>
          </ChildWrapper>
        ) : (
          <Name onClick={google_login}>로그인</Name>
        )}
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
`;

const Wrapper = styled.div`
  width: 1440px;
  height: 56px;
  background-color: #eeeded;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px 8px 130px;
  gap: 190px;
`;

const InputWrapper = styled.div`
  width: 660px;
`;

const BtnWrapper = styled.div`
  width: 54px;
`;

const ChildWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  max-width: 660px;
  position: relative;
`;

const Name = styled.strong`
  margin-right: 5px;
  font-size: 16px;
  color: #757575;
  cursor: pointer;
`;

const Menu = styled.div``;
