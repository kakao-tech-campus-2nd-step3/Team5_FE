import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { debounce } from 'lodash';
import { z } from 'zod';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
} from '@/components';

import { postValidateUrl } from '@/pages/auto/apis';
import { useLinkContext } from '@/pages/auto/provider';
import { FormSchema } from '@/pages/auto/utils';

type LinkFieldProps = {
  form: UseFormReturn<z.infer<typeof FormSchema>>;
};

const LinkField = ({ form }: LinkFieldProps) => {
  const { watch, setError, clearErrors } = form;
  const linkValue = watch('url');

  const { setLinkState } = useLinkContext();

  useEffect(() => {
    const validateUrl = debounce(async (url: string) => {
      try {
        const data = await postValidateUrl({ url });

        setLinkState({
          title: data.title,
          user: data.user,
          url: data.url,
        });

        clearErrors('url');
      } catch (error) {
        console.error('Error during URL validation:', error);
        setError('url', {
          type: 'manual',
          message: '유효하지 않은 URL입니다.',
        });
      }
    }, 500);

    if (linkValue) {
      validateUrl(linkValue);
    }

    return () => {
      validateUrl.cancel();
    };
  }, [linkValue, setError, clearErrors, setLinkState]);

  return (
    <FormField
      control={form.control}
      name='url'
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
};

export default LinkField;
