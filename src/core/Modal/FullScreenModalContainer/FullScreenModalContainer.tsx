import React from 'react';

export type FullScreenModalContainerProps = { children: React.ReactNode };
export const FullScreenModalContainer = ({ children }: FullScreenModalContainerProps) => (
  <div
    style={{
      width: '100%',
      height: '100%',
    }}
  >
    {children}
  </div>
);
