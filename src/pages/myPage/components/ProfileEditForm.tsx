import React, { memo } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import { z } from 'zod';

import { Form, Button } from '@/components';

import { useUpdateMyInfo } from '@/pages/myPage/apis/updateMyInfo';
import ProfileEditField from '@/pages/myPage/components/ProfileEditField';
import { ProfileSchema } from '@/pages/myPage/utils/ProfileSchema';

import { zodResolver } from '@hookform/resolvers/zod';

type ProfileFormValues = z.infer<typeof ProfileSchema>;

interface ProfileEditFormProps {
  refetchMyInfo: () => void;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = memo(
  ({ refetchMyInfo }) => {
    const form = useForm<ProfileFormValues>({
      resolver: zodResolver(ProfileSchema),
      defaultValues: {
        gender: undefined,
        age: undefined,
        category: [],
      },
    });

    const { mutate: updateMyInfo } = useUpdateMyInfo();

    const onSubmit = (data: ProfileFormValues) => {
      const categoryMapping: { [key: string]: number } = {
        음식: 1,
        여행: 2,
        게임: 3,
        음악: 4,
        스포츠: 5,
      };

      const payload = {
        gender: data.gender || '',
        age: data.age || '',
        categories: data.category.map((cat) => categoryMapping[cat]),
      };

      updateMyInfo(payload, {
        onSuccess: (response: any) => {
          console.log('정보가 성공적으로 업데이트되었습니다:', response);
          refetchMyInfo();
        },
        onError: (error: any) => {
          console.error('정보 업데이트에 실패하였습니다:', error);
        },
      });
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
  }
);

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
  margin-top: 16px;
  margin-bottom: 16px;
`;
