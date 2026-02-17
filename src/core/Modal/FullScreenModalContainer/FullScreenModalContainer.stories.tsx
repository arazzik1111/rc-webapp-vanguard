import { FullScreenModalContainer, FullScreenModalContainerProps } from "./FullScreenModalContainer";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";

export default SbDecorator({
  title: "Vanguard/Modal/FullScreenModalContainer",
  component: FullScreenModalContainer,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: FullScreenModalContainerProps = {
  children: <div>Test Child</div>,
};

export const FullScreenModalContainerStory = (props: FullScreenModalContainerProps) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <FullScreenModalContainer {...propsMock}>ImplementME</FullScreenModalContainer>
    </div>
  );
};
