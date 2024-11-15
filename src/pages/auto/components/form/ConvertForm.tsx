import { useState } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { z } from 'zod';

import { Form, Button, Spinner } from '@/components';

import { postConvertForm } from '@/pages/auto/apis';
import { LinkCard, ConvertField } from '@/pages/auto/components';
import { LinkProvider } from '@/pages/auto/provider';
import { FormSchema } from '@/pages/auto/utils';

import { zodResolver } from '@hookform/resolvers/zod';

const ConvertForm = ({
  setProcessState,
}: {
  setProcessState: (state: 'initial' | 'progress' | 'final') => void;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      categoryId: 0,
      url: '',
    },
  });

  const memberId = sessionStorage.getItem('member_id');
  const email = sessionStorage.getItem('email');

  const memberIdNumber = memberId ? Number(memberId) : 0; // 기본값을 0으로 설정하거나 적절한 값을 사용
  const emailString = email ?? ''; // null이면 빈 문자열로 설정

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const payload = {
      ...values,
      memberId: memberIdNumber,
      email: emailString,
      url: values.url ?? '',
    };
    // console.log('Form submitted with payload:', payload);
    sessionStorage.setItem('initialUrl', values.url ?? '');
    setIsLoading(true);

    try {
      const response = await postConvertForm(payload);
      const { task_id } = response;
      sessionStorage.setItem('task_id', task_id);
      setProcessState('progress');
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('추출에 실패했습니다. 다시 시도해주세요.');
      setProcessState('initial');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormContainer>
          <LinkProvider>
            <FormWrapper>
              <ConvertField form={form} />
              <LinkCard />
            </FormWrapper>
          </LinkProvider>
          <Button variant='default' type='submit'>
            {isLoading ? <Spinner /> : '추출하기'}
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
  height: 616px;
  gap: 200px;
`;

const FormWrapper = styled.div`
  gap: 118px;
  display: flex;
  width: 100%;
`;
