import { alignItemsCenter, dFlex, flexWrap, gap1, mt1 } from '@globalStyles';
import { classNames } from '@helpers/classNames';
import { LocationCategories } from '@models/swagger/App/Domain/Presence/Entities/Locations/Categories/LocationCategories';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Render } from '@vanguard/Render/Render';
import { TagProps } from '@vanguard/TagList/Tag/Tag';
import { TagType } from '@vanguard/TagList/Tag/TagType.enum.ts';
import { TagList } from '@vanguard/TagList/TagList';
import { Text } from '@vanguard/Text/Text';
import React from 'react';

export interface LocationCategoriesListProps {
  categories: LocationCategories;
}

export const LocationCategoriesList = (props: LocationCategoriesListProps) => {
  const { categories } = props;

  return (
    <ComponentContainer>
      <Render if={!!categories.primary}>
        <div className={classNames(dFlex, gap1, alignItemsCenter, flexWrap)}>
          <TagList
            className={'primary-container'}
            tags={[
              {
                id: categories.primary?.id,
                type: TagType.primary,
                text: categories.primary?.name ?? '',
              },
            ]}
          />
          <Text color={'--n400'}>Primary category</Text>
        </div>
      </Render>

      <Render if={(categories.elements?.length ?? 0) > 1}>
        <TagList
          className={mt1}
          tags={categories.elements?.reduce((tags: TagProps[], element, index) => {
            if (index !== 0) {
              tags.push({
                id: element.id,
                type: TagType.default,
                text: element.category?.name ?? '',
              });
            }
            return tags;
          }, [])}
        />
      </Render>
    </ComponentContainer>
  );
};
