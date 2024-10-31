import { UseFormReturn } from 'react-hook-form';

import styled from 'styled-components';
import { z } from 'zod';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Button,
} from '@/components';

import { AddSchema } from '@/pages/add/utils';

type CategoriesFieldProps = {
  form: UseFormReturn<z.infer<typeof AddSchema>>;
};

const CategoriesField = ({ form }: CategoriesFieldProps) => {
  const categories = ['음식', '여행', '게임', '음악', '스포츠'];

  return (
    <FormField
      control={form.control}
      name='categories'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-xl'>
            선호하는 카테고리를 선택해주세요. (최대 3개)
          </FormLabel>
          <FormControl>
            <ButtonWrapper>
              {categories.map((category) => {
                const isSelected = field.value.includes(category);

                return (
                  <Button
                    key={category}
                    type='button'
                    variant='secondary'
                    size='sm'
                    onClick={() => {
                      if (isSelected) {
                        field.onChange(
                          field.value.filter(
                            (item: string) => item !== category
                          )
                        );
                      } else {
                        field.onChange([...field.value, category]);
                      }
                    }}
                    isSelected={isSelected}
                  >
                    {category}
                  </Button>
                );
              })}
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
