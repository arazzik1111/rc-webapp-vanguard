import { SpendingForecastSection, SpendingForecastSectionProps } from "./SpendingForecastSection";
import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/SpendingForecastSection",
  component: SpendingForecastSection,
});

export const SpendingForecastSectionStory = (props: SpendingForecastSectionProps) => {
  const { budgetSelected = 5 } = props;
  return (
    <div>
      <SpendingForecastSection {...props} budgetSelected={budgetSelected} />
    </div>
  );
};
