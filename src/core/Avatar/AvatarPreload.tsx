import { Avatar, AvatarIcon } from '@vanguard/Avatar/Avatar';
import React from 'react';

export type AvatarPreloadProps = {
  icons?: Array<AvatarIcon | string>;
};
export const AvatarPreload = (props: AvatarPreloadProps) => {
  const { icons } = props;
  return (
    <>
      {icons?.map((icon) => {
        return (
          <span
            key={icon}
            style={{
              display: 'none',
            }}
          >
            <Avatar icon={icon} />
          </span>
        );
      })}
    </>
  );
};
