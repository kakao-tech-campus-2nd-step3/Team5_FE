import styled from 'styled-components';

import { Header, ShortsGrid } from '@/components';

import { Categories } from '@/pages/main/utils';

const MainPage = () => {
  return (
    <>
      <Header />
      {Categories.map((category) => (
        <CategoryTitle key={category.id}>
          {category.name}
          <ShortsGrid categoryId={category.id} />
        </CategoryTitle>
      ))}
    </>
  );
};

export default MainPage;

const CategoryTitle = styled.h2`
  margin: 20px 25px;
  font-size: 24px;
  font-weight: bold;
`;
