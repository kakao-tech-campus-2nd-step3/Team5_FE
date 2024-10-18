import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { z } from 'zod';

import { Form, Button } from '@/components';

import ProfileEditField from '@/pages/myPage/components/ProfileEditField';
import { ProfileSchema } from '@/pages/myPage/utils/ProfileSchema';

import { zodResolver } from '@hookform/resolvers/zod';

type ProfileFormValues = z.infer<typeof ProfileSchema>;

const ProfileEditForm = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      gender: undefined,
      age: undefined,
      category: [],
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log('Form submitted');
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormContainer>
          <SectionTitle>개인정보 수정</SectionTitle>
          <ProfileEditField form={form} />
          <Button variant='default' type='submit'>
            수정하기
          </Button>
        </FormContainer>
      </form>
    </Form>
  );
};

export default ProfileEditForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1200px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 24px;
`;
