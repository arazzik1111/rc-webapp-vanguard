import { CampaignUpsellingTrigger, CampaignUpsellingTriggerProps } from "./CampaignUpsellingTrigger";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/CampaignUpsellingTrigger",
  component: CampaignUpsellingTrigger,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: CampaignUpsellingTriggerProps = {};

export const CampaignUpsellingTriggerStory = (props: CampaignUpsellingTriggerProps) => {
  /**
   * Here we can add story specific props
   * */
  return (
    <JumpPageBackground>
      <CampaignUpsellingTrigger {...props}></CampaignUpsellingTrigger>
    </JumpPageBackground>
  );
};

const JumpPageBackground = (props: { children: any }) => {
  const bg = `linear-gradient(135deg, #fff 0%, #fffaf7 10%, #fff3ea 20%, #f5f3f0 33%, #ddf3ff 66%, #d0f1c9 100%) center center fixed`;
  return (
    <div style={{ width: "100%", background: bg, display: "flex", justifyContent: "center", padding: "100px" }}>
      <div style={{ width: "100%" }}>{props.children}</div>
    </div>
  );
};
