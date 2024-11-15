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

import { FormSchema } from '@/pages/auto/utils';

type CategoryFieldProps = {
  form: UseFormReturn<z.infer<typeof FormSchema>>;
};

const CategoryField = ({ form }: CategoryFieldProps) => (
  <FormField
    control={form.control}
    name='categoryId'
    render={({ field }) => (
      <FormItem>
        <FormLabel>카테고리</FormLabel>
        <FormControl>
          <Select
            defaultValue={field.value?.toString()}
            onValueChange={(value) => field.onChange(Number(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder='카테고리를 선택해주세요.' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='4'>음식</SelectItem>
                <SelectItem value='1'>여행</SelectItem>
                <SelectItem value='2'>게임</SelectItem>
                <SelectItem value='0'>음악</SelectItem>
                <SelectItem value='3'>스포츠</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default CategoryField;
