import { UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import * as CommonUI from '@/components/common';

import { FormSchema } from '../utils/FormSchema';

type ConvertFieldProps = {
  form: UseFormReturn<z.infer<typeof FormSchema>>; // form의 타입을 useForm의 반환값으로 설정
};

const ConvertField = ({ form }: ConvertFieldProps) => {
  return (
    <>
      <div className='grid w-full max-w-sm items-center gap-5'>
        <CommonUI.FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <CommonUI.FormItem>
              <CommonUI.FormLabel>제목</CommonUI.FormLabel>
              <CommonUI.FormControl>
                <CommonUI.Input placeholder='제목을 입력해주세요.' {...field} />
              </CommonUI.FormControl>
              <CommonUI.FormMessage />
            </CommonUI.FormItem>
          )}
        />

        <CommonUI.FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <CommonUI.FormItem>
              <CommonUI.FormLabel>카테고리</CommonUI.FormLabel>
              <CommonUI.FormControl>
                <CommonUI.Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <CommonUI.SelectTrigger>
                    <CommonUI.SelectValue placeholder='카테고리를 선택해주세요.' />
                  </CommonUI.SelectTrigger>
                  <CommonUI.SelectContent>
                    <CommonUI.SelectGroup>
                      <CommonUI.SelectItem value='option1'>
                        음식
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='option2'>
                        여행
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='option3'>
                        게임
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='option4'>
                        음악
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='option5'>
                        스포츠
                      </CommonUI.SelectItem>
                    </CommonUI.SelectGroup>
                  </CommonUI.SelectContent>
                </CommonUI.Select>
              </CommonUI.FormControl>
              <CommonUI.FormMessage />
            </CommonUI.FormItem>
          )}
        />

        {/* Link Field */}
        <CommonUI.FormField
          control={form.control}
          name='link'
          render={({ field }) => (
            <CommonUI.FormItem>
              <CommonUI.FormLabel>Youtube Link</CommonUI.FormLabel>
              <CommonUI.FormControl>
                <CommonUI.Input
                  type='url'
                  placeholder='링크를 입력하세요.'
                  {...field}
                />
              </CommonUI.FormControl>
              <CommonUI.FormMessage />
            </CommonUI.FormItem>
          )}
        />

        {/* Keywords Field */}
        <CommonUI.FormField
          control={form.control}
          name='keywords'
          render={({ field }) => (
            <CommonUI.FormItem>
              <CommonUI.FormLabel>Keywords</CommonUI.FormLabel>
              <CommonUI.FormControl>
                <CommonUI.Textarea
                  placeholder='어떤 키워드를 중점적으로 쇼츠를 변환시키고 싶으신가요?'
                  id='keywords'
                  style={{ resize: 'none' }}
                  {...field}
                />
              </CommonUI.FormControl>
              <CommonUI.FormMessage />
            </CommonUI.FormItem>
          )}
        />
      </div>
    </>
  );
};

export default ConvertField;
