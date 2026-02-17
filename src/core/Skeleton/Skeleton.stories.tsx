import { Skeleton, SkeletonTypes } from "./Skeleton";
import React from "react";
import { classNames } from "@helpers/classNames";
import { alignItemsCenter, dFlex, dFlexColumn, justifyContentCenter, mb1, mb2, mt1 } from "@globalStyles";
import { SbDecorator } from "@test-utils/get-storybook-decorator.tsx";

export default SbDecorator({
  title: "Vanguard/Skeleton",
  component: Skeleton,
});

export const SkeletonStories = () => {
  return (
    <div
      className={classNames(dFlexColumn, alignItemsCenter, justifyContentCenter)}
      style={{ backgroundColor: "var(--n000)", height: 400, width: 400 }}
    >
      <Skeleton style={{ height: 15, width: "40%" }} className={classNames(mb2, mb1)} />
      <Skeleton type={SkeletonTypes.circle} style={{ height: 15, width: 15 }} className={classNames(mt1, mb1)} />
    </div>
  );
};
