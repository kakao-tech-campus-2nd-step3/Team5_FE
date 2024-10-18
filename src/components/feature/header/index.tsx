import { useState } from 'react';

import ProfileMenu from '@/components/feature/menu/ProfileMenu';

import styled from 'styled-components';

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  Input,
  Button,
} from '@/components';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        <ChildWrapper onClick={toggleMenu}>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Name>name</Name>
          <Menu>
            {isMenuOpen && <ProfileMenu />}
          </Menu>
        </ChildWrapper>
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
`;

const Menu = styled.div``;
