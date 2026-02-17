import { DashboardCard, DashboardCardProps } from "./DashboardCard";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";

export default {
  ...SbDecorator({
    title: "components/main/MainDashboard/DashboardCard",
    component: DashboardCard,
    extra: {
      ...disableControls([""]),
    },
  }),
};

const defaultProps: DashboardCardProps = {
  title: "Title",
  infoIconProps: {
    message: "InfoBox Description",
  },
  noPadding: false,
  children: <div>Content</div>,
};

export const DashboardCardStory = (props: DashboardCardProps) => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <DashboardCard {...props}></DashboardCard>
    </div>
  );
};
