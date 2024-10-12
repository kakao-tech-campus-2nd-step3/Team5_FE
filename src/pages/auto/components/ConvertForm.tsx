import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { z } from 'zod';

import * as CommonUI from '@/components/common';

import { FormSchema } from '@/pages/auto/utils/FormSchema';

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
    <CommonUI.Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormContainer>
          <FormWrapper>
            <ConvertField form={form} />
            <LinkCard />
          </FormWrapper>
          <CommonUI.Button variant='default' type='submit'>
            변환하기
          </CommonUI.Button>
        </FormContainer>
      </form>
    </CommonUI.Form>
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
