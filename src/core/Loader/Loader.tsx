import './Loader.scss';

import React from 'react';

import { ComponentContainer } from '../ComponentContainer/ComponentContainer';

interface Props {
  loading: boolean;
  testId?: string;
}

export const Loader = (props: Props) => {
  const { loading, testId } = props;

  if (!loading) {
    return null;
  }

  return (
    <ComponentContainer className={'Loader-container'} testId={testId}>
      <div className="loading">
        <div className="uil-ring-css">
          <div />
        </div>
      </div>
    </ComponentContainer>
  );
};
