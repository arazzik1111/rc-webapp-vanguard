import React from 'react';

export interface RenderProps {
  if?: boolean;
  children: React.ReactNode;
  keepInDom?: boolean;
  className?: string;
}

export const Render = (props: RenderProps) => {
  const { children, keepInDom = false, className } = props;

  if (keepInDom) {
    return (
      <div style={{ display: !props.if ? 'none' : undefined }} className={props.className}>
        {children}
      </div>
    );
  }

  if (props.if && props.className) {
    return <span className={props.className}>{children}</span>;
  }

  if (props.if) {
    return <>{children}</>;
  }

  return null;
};
