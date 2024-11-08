import React from 'react';

import { Button } from '@/components/common';

type CategoriesBtnProps = {
  options: string[];
  selectedValues: string[];
  onChange: (value: string[]) => void;
  maxSelections?: number;
};

const CategoriesBtn = ({
  options,
  selectedValues,
  onChange,
  maxSelections,
}: CategoriesBtnProps) => {
  const handleSelect = (option: string) => {
    const isSelected = selectedValues.includes(option);

    if (isSelected) {
      onChange(selectedValues.filter((item) => item !== option));
    } else {
      if (!maxSelections || selectedValues.length < maxSelections) {
        onChange([...selectedValues, option]);
      }
    }
  };

  return (
    <React.Fragment>
      {options.map((option) => (
        <Button
          key={option}
          type='button'
          variant='secondary'
          size='sm'
          onClick={() => handleSelect(option)}
          isSelected={selectedValues.includes(option)}
        >
          {option}
        </Button>
      ))}
    </React.Fragment>
  );
};

export default CategoriesBtn;
