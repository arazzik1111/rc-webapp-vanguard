import './Divider.scss';

import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Divider = (props: Props) => {
  const { className = '', ...rest } = props;
  return <div className={`rc-divider ${className}`} {...rest} />;
};
