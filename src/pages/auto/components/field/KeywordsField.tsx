import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Textarea,
  FormMessage,
} from '@/components';

import { FormSchema } from '@/pages/auto/utils';

type KeywordsFieldProps = {
  form: UseFormReturn<z.infer<typeof FormSchema>>;
};

const KeywordsField = ({ form }: KeywordsFieldProps) => (
  <FormField
    control={form.control}
    name='keywords'
    render={({ field }) => (
      <FormItem>
        <FormLabel>Keywords</FormLabel>
        <FormControl>
          <Textarea
            placeholder='어떤 키워드를 중점적으로 쇼츠를 변환시키고 싶으신가요?'
            id='keywords'
            style={{ resize: 'none' }}
            {...field}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default KeywordsField;
