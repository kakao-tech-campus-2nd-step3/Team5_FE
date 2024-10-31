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

type GenderFieldProps = {
  form: UseFormReturn<z.infer<typeof AddSchema>>;
};

const GenderField = ({ form }: GenderFieldProps) => {
  const gender = ['남성', '여성'];

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
              {gender.map((gender) => {
                const isSelected = field.value.includes(gender);

                return (
                  <Button
                    key={gender}
                    type='button'
                    variant='secondary'
                    size='sm'
                    isSelected={isSelected}
                    onClick={() => field.onChange(gender)}
                  >
                    {gender}
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

export default GenderField;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 143px;
`;
