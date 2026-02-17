import { mt1 } from '@globalStyles';
import { LocationServiceAreas } from '@models/swagger/App/Domain/Presence/Entities/Locations/ServiceAreas/LocationServiceAreas';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Render } from '@vanguard/Render/Render';
import { TagProps } from '@vanguard/TagList/Tag/Tag';
import { TagType } from '@vanguard/TagList/Tag/TagType.enum.ts';
import { TagList } from '@vanguard/TagList/TagList';
import React, { useEffect, useState } from 'react';

export interface LocationServiceAreasListProps {
  serviceAreas?: LocationServiceAreas;
}

export const LocationServiceAreasList = (props: LocationServiceAreasListProps) => {
  const { serviceAreas } = props;

  const [listOfTags, setListOfTags] = useState<TagProps[]>([]);

  useEffect(() => {
    generateListOfTags();
  }, []);

  const generateListOfTags = () => {
    setListOfTags(
      serviceAreas?.elements?.reduce((tags: TagProps[], element, index) => {
        tags.push({
          id: element.serviceAreaId,
          type: TagType.default,
          text: element.serviceArea?.name,
        });
        return tags;
      }, []) ?? [],
    );
  };

  return (
    <ComponentContainer>
      <Render if={!!listOfTags.length}>
        <TagList className={mt1} tags={listOfTags} />
      </Render>
    </ComponentContainer>
  );
};
