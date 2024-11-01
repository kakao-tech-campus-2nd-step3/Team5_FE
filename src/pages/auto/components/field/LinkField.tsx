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

type LinkFieldProps = {
  form: UseFormReturn<z.infer<typeof FormSchema>>;
};

const LinkField = ({ form }: LinkFieldProps) => (
  <FormField
    control={form.control}
    name='link'
    render={({ field }) => (
      <FormItem>
        <FormLabel>Youtube Link</FormLabel>
        <FormControl>
          <Input type='url' placeholder='링크를 입력하세요.' {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default LinkField;
