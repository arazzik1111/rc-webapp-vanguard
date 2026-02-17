import './TagList.scss';

import { gap0_5, gap1 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import React from 'react';

import { ComponentContainer } from '../ComponentContainer/ComponentContainer';
import { Tag, TagProps } from './Tag/Tag';

interface Props {
  tags?: TagProps[];
  className?: string;
  variant?: 'chip' | 'tag';
}

export const TagList = (props: Props) => {
  const { tags, className, variant = 'tag' } = props;

  return (
    <ComponentContainer
      className={classNames(`TagList-container ${className ?? ''} ${variant === 'chip' ? gap0_5 : gap1}`)}
    >
      {tags &&
        tags.length &&
        tags.map((tag) => {
          return <Tag {...tag} variant={variant} key={tag.id} />;
        })}
    </ComponentContainer>
  );
};
