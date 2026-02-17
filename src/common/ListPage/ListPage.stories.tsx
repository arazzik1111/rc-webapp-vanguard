import { ListPage, ListPageProps } from './ListPage';
import React from 'react';
import { disableControls, SbDecorator } from '@test-utils/get-storybook-decorator';
import { mapStorybookActionToProps } from '@test-utils/map-storybook-action-to-props';

export default SbDecorator({
  title: 'BuildingBlocks/ListPage',
  component: ListPage,
  extra: {
    ...disableControls(['']),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: ListPageProps<any> = {} as any;


export const ListPageStory = (props: ListPageProps<any>) => {

  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <ListPage {...propsMock}>ImplementME</ListPage>
    </div>
  );
};

