import { LottieAnimationLoader, LottieAnimationLoaderProps } from "./LottieAnimationLoader";
import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";
// @ts-ignore
import animation from "./LottieBase/mock/mock-anim.json";

export default SbDecorator({
  title: "Vanguard/LottieAnimationLoader",
  component: LottieAnimationLoader,
});

export const LottieAnimationLoaderStory = (props: LottieAnimationLoaderProps) => {
  const src = animation;
  return (
    <div>
      <LottieAnimationLoader
        placeholder={
          <img src={"https://i.picsum.photos/id/464/200/300.jpg?hmac=M4MNTPYELJRy0vZcT-h-EWmXkPdnXHvF9ufEPkhDt2g"} />
        }
        src={src}
      />
    </div>
  );
};
