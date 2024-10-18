import { UseFormReturn } from 'react-hook-form';
import Select from 'react-select';

import { z } from 'zod';

import * as CommonUI from '@/components/common';

import { ProfileSchema } from '@/pages/myPage/utils/ProfileSchema';

type ProfileEditFieldProps = {
  form: UseFormReturn<z.infer<typeof ProfileSchema>>;
};

const ProfileEditField = ({ form }: ProfileEditFieldProps) => {
  const options = [
    { value: 'option1', label: '음식' },
    { value: 'option2', label: '여행' },
    { value: 'option3', label: '게임' },
    { value: 'option4', label: '음악' },
    { value: 'option5', label: '스포츠' },
  ];

  return (
    <>
      <div className='grid w-full max-w-sm items-center gap-5'>
        <CommonUI.FormField
          control={form.control}
          name='gender'
          render={({ field }) => (
            <CommonUI.FormItem>
              <CommonUI.FormLabel>성별</CommonUI.FormLabel>
              <CommonUI.FormControl>
                <CommonUI.Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <CommonUI.SelectTrigger>
                    <CommonUI.SelectValue placeholder='성별을 선택해주세요.' />
                  </CommonUI.SelectTrigger>
                  <CommonUI.SelectContent>
                    <CommonUI.SelectGroup>
                      <CommonUI.SelectItem value='남성'>
                        남성
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='여성'>
                        여성
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='그 외'>
                        그 외
                      </CommonUI.SelectItem>
                    </CommonUI.SelectGroup>
                  </CommonUI.SelectContent>
                </CommonUI.Select>
              </CommonUI.FormControl>
            </CommonUI.FormItem>
          )}
        />

        <CommonUI.FormField
          control={form.control}
          name='age'
          render={({ field }) => (
            <CommonUI.FormItem>
              <CommonUI.FormLabel>회원님의 연령대</CommonUI.FormLabel>
              <CommonUI.FormControl>
                <CommonUI.Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <CommonUI.SelectTrigger>
                    <CommonUI.SelectValue placeholder='연령대를 선택해주세요.' />
                  </CommonUI.SelectTrigger>
                  <CommonUI.SelectContent>
                    <CommonUI.SelectGroup>
                      <CommonUI.SelectItem value='10대'>
                        10대
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='20대'>
                        20대
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='30대'>
                        30대
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='40대'>
                        40대
                      </CommonUI.SelectItem>
                      <CommonUI.SelectItem value='50대 이상'>
                        50대 이상
                      </CommonUI.SelectItem>
                    </CommonUI.SelectGroup>
                  </CommonUI.SelectContent>
                </CommonUI.Select>
              </CommonUI.FormControl>
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
                <Select
                  isMulti
                  options={options}
                  defaultValue={options.filter((option) =>
                    field.value.includes(option.value)
                  )}
                  onChange={(selectedOptions) => {
                    field.onChange(
                      selectedOptions.map((option) => option.value)
                    );
                  }}
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

export default ProfileEditField;
