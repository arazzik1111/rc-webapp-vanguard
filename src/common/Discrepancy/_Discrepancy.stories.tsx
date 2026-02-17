import { Discrepancy, DiscrepancyProps } from "./Discrepancy";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/Discrepancy",
  component: Discrepancy,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: DiscrepancyProps = {
  onSelection: (value) => {},
  locationLabel: "",
  directoryLabel: "",
  divergency: {
    dataStatus: undefined,
    syncStatus: undefined,
    type: undefined,
    score: undefined,
    dataOnLocation: undefined,
    dataOnDirectory: undefined,
    dataToBeUsedForLocationUpdate: undefined,
    objectType: "",
  },
};

export const DiscrepancyStory = (props: DiscrepancyProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <div>
      <Discrepancy {...props}>ImplementME</Discrepancy>
    </div>
  );
};
