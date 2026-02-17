import React, { useRef } from "react";
import { ActionCard } from "../ActionCard";
import { Story, testChildren } from "./_ActionCard.default.tsx";

const WithInnerRefComponent = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <ActionCard
      children={testChildren}
      innerRef={ref}
    />
  );
};

export const WithInnerRef: Story = {
  render: () => <WithInnerRefComponent />,
};