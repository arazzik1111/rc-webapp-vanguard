import React from 'react';

export interface ActionCardBodyProps {
  children: React.ReactNode;
}

export const ActionCardBody = (props: ActionCardBodyProps) => {
  const { children } = props;

  return <>{children}</>;
};
