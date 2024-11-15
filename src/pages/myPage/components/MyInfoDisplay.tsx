import React from 'react';
import { FaUser, FaCalendarAlt, FaListAlt } from 'react-icons/fa';

import styled from 'styled-components';

import { Spinner } from '@/components';

import { useFetchMyInfo } from '@/pages/myPage/apis/fetchMyInfo';

const MyInfoDisplay: React.FC = () => {
  const { data: myInfo, isLoading, error } = useFetchMyInfo();

  if (isLoading) return <Spinner />;
  if (error) return <ErrorText>내 정보를 불러오는 데 실패했습니다.</ErrorText>;

  return (
    <Card>
      <CardHeader>내 정보</CardHeader>
      <InfoContainer>
        <InfoItem>
          <IconContainer>
            <FaUser />
          </IconContainer>
          <Label>성별:</Label>
          <Value>{myInfo?.gender || '정보 없음'}</Value>
        </InfoItem>
        <InfoItem>
          <IconContainer>
            <FaCalendarAlt />
          </IconContainer>
          <Label>연령대:</Label>
          <Value>{myInfo?.age || '정보 없음'}</Value>
        </InfoItem>
        <InfoItem>
          <IconContainer>
            <FaListAlt />
          </IconContainer>
          <Label>선호 카테고리:</Label>
          <CategoryList>
            {myInfo?.categories.length
              ? myInfo.categories.map((cat) => (
                  <CategoryItem key={cat.id}>{cat.name}</CategoryItem>
                ))
              : '정보 없음'}
          </CategoryList>
        </InfoItem>
      </InfoContainer>
    </Card>
  );
};

export default MyInfoDisplay;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 24px;
  max-width: 500px;
  margin: 20px auto;
`;

const CardHeader = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 12px;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #555;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const IconContainer = styled.div`
  font-size: 22px;
  color: #007bff;
  margin-right: 12px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #333;
  margin-right: 8px;
  flex-shrink: 0;
`;

const Value = styled.span`
  color: #555;
`;

const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const CategoryItem = styled.li`
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 14px;
`;

const ErrorText = styled.div`
  color: #ff4d4f;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;
