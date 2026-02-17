import './FormControl.scss';

import { FormControl as FormControlBase, FormControlProps } from '@mui/material';
import React from 'react';

import { ComponentContainer } from '../ComponentContainer/ComponentContainer';

type Props = {} & FormControlProps;

export const FormControl = (props: Props) => {
  const {} = props;

  return (
    <ComponentContainer className={'FormControl-container'}>
      <FormControlBase {...props} />
    </ComponentContainer>
  );
};
