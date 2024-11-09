import { UseFormReturn } from 'react-hook-form';

import styled from 'styled-components';
import { z } from 'zod';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  CategoriesBtn,
} from '@/components';

import { AddSchema } from '@/pages/add/utils';

type GenderFieldProps = {
  form: UseFormReturn<z.infer<typeof AddSchema>>;
};

const GenderField = ({ form }: GenderFieldProps) => {
  const genderOptions = ['남성', '여성'];

  return (
    <FormField
      control={form.control}
      name='gender'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-xl'>
            회원님의 성별을 선택해주세요.
          </FormLabel>
          <FormControl>
            <ButtonWrapper>
              <CategoriesBtn
                options={genderOptions}
                selectedValues={field.value ? [field.value] : []}
                onChange={(selected) => field.onChange(selected[0] ?? '')}
                maxSelections={1}
              />
            </ButtonWrapper>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default GenderField;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 143px;
`;
