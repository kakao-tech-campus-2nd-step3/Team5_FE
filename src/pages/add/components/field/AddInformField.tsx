import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import {
  AgeField,
  CategoriesField,
  GenderField,
} from '@/pages/add/components/field';
import { AddSchema } from '@/pages/add/utils';

type AddInformFieldProps = {
  form: UseFormReturn<z.infer<typeof AddSchema>>;
};

const AddInformField = ({ form }: AddInformFieldProps) => {
  return (
    <div className='grid w-full max-w-sm items-center gap-7'>
      <CategoriesField form={form} />
      <AgeField form={form} />
      <GenderField form={form} />
    </div>
  );
};

export default AddInformField;
