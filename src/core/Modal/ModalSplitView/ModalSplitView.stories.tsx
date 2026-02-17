import { ModalSplitView } from "./ModalSplitView";
import React, { useEffect, useState } from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "Vanguard/Modal/ModalSplitView",
  component: ModalSplitView,
});

export const ModalSplitViewStory = () => {
  const [contracted, setContracted] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setContracted((prev) => !prev);
    }, 1000);
  }, []);

  return (
    <div style={{ width: "90vw", height: "90vh" }}>
      <ModalSplitView
        isContracted={contracted}
        elements={[
          {
            fullWidth: "100%",
            contractedWidth: "30%",
            component: <div style={{ width: "100%", height: "100%", backgroundColor: "red" }}>LEFT</div>,
          },
          {
            fullWidth: "70%",
            contractedWidth: "70%",
            component: <div style={{ width: "100%", height: "100%", backgroundColor: "blue" }}>RIGHT</div>,
          },
        ]}
      />
    </div>
  );
};
