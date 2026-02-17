import React from 'react';
import Balancer from 'react-wrap-balancer';

export interface TextWrapBalancerProps {
  balanced: boolean | undefined;
  children: React.ReactNode;
}

export const TextWrapBalancer = (props: TextWrapBalancerProps) => {
  const { balanced, children } = props;

  if (balanced) {
    return <Balancer>{children}</Balancer>;
  }

  return <>{children}</>;
};
