import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
} from '@/components';

import { FormSchema } from '@/pages/auto/utils';

type TitleFieldProps = {
  form: UseFormReturn<z.infer<typeof FormSchema>>;
};

const TitleField = ({ form }: TitleFieldProps) => (
  <FormField
    control={form.control}
    name='title'
    render={({ field }) => (
      <FormItem>
        <FormLabel>제목</FormLabel>
        <FormControl>
          <Input placeholder='제목을 입력해주세요.' {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default TitleField;
