import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { z } from 'zod';

import { Form, Button } from '@/components';

import { AddInformField } from '@/pages/add/components';
import { AddSchema } from '@/pages/add/utils';

import { zodResolver } from '@hookform/resolvers/zod';

const AddForm = () => {
  const form = useForm<z.infer<typeof AddSchema>>({
    resolver: zodResolver(AddSchema),
    defaultValues: {
      categories: [],
      age: '',
      gender: '',
    },
  });

  function onSubmit(value: z.infer<typeof AddSchema>) {
    console.log('Form submitted');
    console.log(value);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-20'>
        <FormTitle>크리에이터님의 정보를 알려주세요.</FormTitle>
        <FormContainer>
          <FormWrapper>
            <AddInformField form={form} />
          </FormWrapper>
          <Button variant='default' type='submit'>
            추가하기
          </Button>
        </FormContainer>
      </form>
    </Form>
  );
};

export default AddForm;

const FormTitle = styled.h1`
  font-size: 36px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 650px;
  gap: 160px;
`;

const FormWrapper = styled.div`
  gap: 30px;
  display: flex;
  width: 100%;
`;
