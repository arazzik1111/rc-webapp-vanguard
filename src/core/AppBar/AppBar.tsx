import './AppBar.scss';

import { AppBar as AppBarBase } from '@mui/material';
import { AppBarProps } from '@mui/material/AppBar/AppBar';
import React from 'react';

import { ComponentContainer } from '../ComponentContainer/ComponentContainer';

type Props = {} & AppBarProps;

export const AppBar = (props: Props) => {
  const {} = props;

  return (
    <ComponentContainer className={'AppBar-container'}>
      <AppBarBase {...props} />
    </ComponentContainer>
  );
};
