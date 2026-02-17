import './Snackbar.scss';

import { Snackbar as SnackbarBase, SnackbarProps } from '@mui/material';
import React from 'react';

import { ComponentContainer } from '../ComponentContainer/ComponentContainer';

type Props = {} & SnackbarProps;

export const Snackbar = (props: Props) => {
  const {} = props;

  return (
    <ComponentContainer className={'Snackbar-container'}>
      <SnackbarBase {...props} />
    </ComponentContainer>
  );
};
