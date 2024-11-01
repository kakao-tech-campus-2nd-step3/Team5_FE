import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import {
  CategoryField,
  KeywordsField,
  LinkField,
  TitleField,
} from '@/pages/auto/components';
import { FormSchema } from '@/pages/auto/utils';

type ConvertFieldProps = {
  form: UseFormReturn<z.infer<typeof FormSchema>>;
};

const ConvertField = ({ form }: ConvertFieldProps) => {
  return (
    <div className='grid w-full max-w-sm items-center gap-5'>
      <TitleField form={form} />
      <CategoryField form={form} />
      <LinkField form={form} />
      <KeywordsField form={form} />
    </div>
  );
};

export default ConvertField;
