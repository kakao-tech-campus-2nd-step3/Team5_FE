import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  FormMessage,
} from '@/components';

import { AddSchema } from '@/pages/add/utils';

type AgeFieldProps = {
  form: UseFormReturn<z.infer<typeof AddSchema>>;
};

const AgeField = ({ form }: AgeFieldProps) => {
  return (
    <FormField
      control={form.control}
      name='age'
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-xl'>
            회원님의 연령대를 입력해주세요.
          </FormLabel>
          <FormControl>
            <Select defaultValue={field.value} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder='연령대를 선택해주세요.' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='option1'>10대</SelectItem>
                  <SelectItem value='option2'>20대</SelectItem>
                  <SelectItem value='option3'>30대</SelectItem>
                  <SelectItem value='option4'>40대</SelectItem>
                  <SelectItem value='option5'>50대 이상</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AgeField;
