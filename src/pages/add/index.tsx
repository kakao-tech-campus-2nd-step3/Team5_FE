import styled from 'styled-components';

import { AddForm } from '@/pages/add/components';

const AddPage = () => {
  return (
    <AddContainer>
      <AddForm />
    </AddContainer>
  );
};

export default AddPage;

const AddContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 58px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
