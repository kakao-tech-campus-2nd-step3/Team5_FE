import React from 'react';
import { useInView } from 'react-intersection-observer';

import styled from 'styled-components';

import { useFetchShorts } from '@/pages/viewer/api/useFetchShorts.api';
import ShortsCard from '@/pages/viewer/components/ShortsCard';

const ShortsViewerPage: React.FC = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchShorts();

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <Container>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.data.map((short) => (
            <ShortsCard key={short.id} short={short} />
          ))}
        </React.Fragment>
      ))}
      <div ref={ref} />
      {isFetchingNextPage && <Loading>Loading more...</Loading>}
    </Container>
  );
};

export default ShortsViewerPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Loading = styled.p`
  text-align: center;
  padding: 20px;
`;
