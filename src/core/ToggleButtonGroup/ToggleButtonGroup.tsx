import './ToggleButtonGroup.scss';

import { ToggleButtonGroup as ToggleButtonGroupBase, ToggleButtonGroupProps } from '@mui/material';
import React from 'react';

import { ComponentContainer } from '../ComponentContainer/ComponentContainer';

type Props = ToggleButtonGroupProps & {};

export const ToggleButtonGroup = (props: Props) => {
  const {} = props;

  return (
    <ComponentContainer className={'ToggleButtonGroup-container'}>
      <ToggleButtonGroupBase {...props} />
    </ComponentContainer>
  );
};
