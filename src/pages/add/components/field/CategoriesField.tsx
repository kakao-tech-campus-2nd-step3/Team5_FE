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

type CategoriesFieldProps = {
  form: UseFormReturn<z.infer<typeof AddSchema>>;
};

const CategoriesField = ({ form }: CategoriesFieldProps) => {
  const categoryOptions = ['음식', '여행', '게임', '음악', '스포츠'];

  return (
    <FormField
      control={form.control}
      name='categories'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-xl'>
            선호하는 카테고리를 선택해주세요. (3개 입력해주세요.)
          </FormLabel>
          <FormControl>
            <ButtonWrapper>
              <CategoriesBtn
                options={categoryOptions}
                selectedValues={field.value}
                onChange={field.onChange}
                maxSelections={3}
              />
            </ButtonWrapper>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CategoriesField;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
