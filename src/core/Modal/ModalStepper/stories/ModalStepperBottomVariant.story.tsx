import React from "react";
import { ComponentContainer } from "@vanguard/ComponentContainer/ComponentContainer";
import { Modal } from "@vanguard/Modal/Modal";
import { ModalStepper } from "../ModalStepper";
import { Story } from "./_ModalStepper.default";

export const ModalStepperBottomVariant: Story = {
  render: () => {
    const componentStyle = {
      width: 400,
      height: 400,
      border: "1px solid black",
    };

    const steps = [
      {
        name: "visible1",
        component: <ComponentContainer style={componentStyle}>Visible1</ComponentContainer>,
      },
      {
        name: "visible2",
        component: <ComponentContainer style={componentStyle}>Visible2</ComponentContainer>,
      },
      {
        name: "visible3",
        component: <ComponentContainer style={componentStyle}>Visible3</ComponentContainer>,
      },
    ];

    return (
      <Modal>
        <ModalStepper
          steps={steps}
          variant={"bottom"}
          onStepChange={(value, name) => {
            console.log("Value", value, name);
          }}
        />
      </Modal>
    );
  },
};