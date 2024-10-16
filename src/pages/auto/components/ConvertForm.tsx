import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { z } from 'zod';

import { Form, Button } from '@/components';

import { FormSchema } from '../utils';
import ConvertField from './ConvertField';
import LinkCard from './LinkCard';
import { zodResolver } from '@hookform/resolvers/zod';

const ConvertForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      category: '',
      link: '',
      keywords: '',
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log('Form submitted');
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormContainer>
          <FormWrapper>
            <ConvertField form={form} />
            <LinkCard />
          </FormWrapper>
          <Button variant='default' type='submit'>
            변환하기
          </Button>
        </FormContainer>
      </form>
    </Form>
  );
};

export default ConvertForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 864px;
  gap: 200px;
`;

const FormWrapper = styled.div`
  gap: 118px;
  display: flex;
  width: 100%;
`;
