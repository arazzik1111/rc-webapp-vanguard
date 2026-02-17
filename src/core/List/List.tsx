import { mb1, mt1 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { IconNames } from '@vanguard/Icon/IconNames';
import { ListShowMore } from '@vanguard/List/ListShowMore/ListShowMore';
import { ListItem } from '@vanguard/ListItem/ListItem';
import { FontWeights, Text, TextReplacements, TextTypes } from '@vanguard/Text/Text';
import React, { ReactNode } from 'react';

import styles from './List.module.scss';

export type ListType = 'numerical' | 'alphabetical' | 'icon' | 'none';

export type ListElementSchema = {
  content: ReactNode | string;
  iconElement?: ReactNode;
  iconName?: IconNames;
  iconColor?: string;
  iconHasCircle?: boolean;
  iconBackgroundColor?: string;
  selected?: boolean;
  isComingSoon?: boolean;
};

export type ListProps = {
  listElements: ListElementSchema[];
  headerNote?: string | React.ReactNode;
  title?: string | React.ReactNode;
  type: ListType;
  footerNote?: string | React.ReactNode;
  flexBasis?: boolean;
  replacements?: TextReplacements;
  limit?: number;
  numberOfColumns?: number;
  columnsGap?: number;
  isText?: boolean;
  textType?: TextTypes;
  onShowMore?: () => {};
  onShowLess?: () => {};
  classNameListItem?: string;
};

export const List = (props: ListProps) => {
  const {
    listElements = [],
    headerNote,
    title,
    type,
    footerNote,
    flexBasis,
    replacements,
    limit,
    numberOfColumns,
    columnsGap,
    isText = false,
    textType = TextTypes.textCaption,
    classNameListItem,
  } = props;

  return (
    <ComponentContainer className={flexBasis ? styles.flexBasis : ''}>
      {typeof headerNote === 'string' ? (
        <Text
          className={classNames(mt1)}
          testId="headerNote"
          color={'var(--n500)'}
          type={TextTypes.textHelp}
          fontWeight={FontWeights.bold}
        >
          {headerNote}
        </Text>
      ) : (
        headerNote
      )}
      {typeof title === 'string' ? (
        <Text className={classNames(mb1)} testId="title" type={TextTypes.text} fontWeight={FontWeights.bold}>
          {title}
        </Text>
      ) : (
        title
      )}
      <div style={{ columns: numberOfColumns, gap: columnsGap }} className={classNames(styles.list)}>
        {listElements
          .filter((e: ListElementSchema, index: number) => (limit ? index < limit : true))
          .map((listElement: ListElementSchema, index: number) => {
            return (
              <ListItem
                key={index}
                selected={listElement.selected}
                type={type}
                index={index}
                iconColor={listElement.iconColor ?? '--brand-color'}
                iconHasCircle={listElement.iconHasCircle}
                iconName={listElement.iconName}
                iconElement={listElement.iconElement}
                iconBackgroundColor={listElement.iconBackgroundColor}
                isText={isText}
                textType={textType}
                replacements={replacements}
                classNameListItem={classNameListItem}
                isComingSoon={listElement.isComingSoon}
              >
                {listElement.content}
              </ListItem>
            );
          })}
        <ListShowMore {...props} />
      </div>

      {typeof footerNote === 'string' ? (
        <i>
          <Text
            className={classNames(mt1)}
            testId="footerNote"
            color={'var(--n500)'}
            type={TextTypes.textCaption}
            replacements={replacements}
          >
            {footerNote}
          </Text>
        </i>
      ) : (
        footerNote
      )}
    </ComponentContainer>
  );
};
