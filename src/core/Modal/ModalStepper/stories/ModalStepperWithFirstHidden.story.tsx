import React from "react";
import { ComponentContainer } from "@vanguard/ComponentContainer/ComponentContainer";
import { Story } from "./_ModalStepper.default";

const steps = [
  {
    name: "hidden1",
    component: <ComponentContainer>Hidden1</ComponentContainer>,
    isHidden: true,
  },
  {
    name: "visible1",
    component: <ComponentContainer>Visible1</ComponentContainer>,
    isHidden: true,
  },
  {
    name: "visible2",
    component: <ComponentContainer>Visible2</ComponentContainer>,
  },
  {
    name: "hidden2",
    component: <ComponentContainer>Hidden2</ComponentContainer>,
    isHidden: true,
  },
  {
    name: "visible3",
    component: <ComponentContainer>Visible3</ComponentContainer>,
  },
  {
    name: "hidden3",
    component: <ComponentContainer>Hidden3</ComponentContainer>,
    isHidden: true,
  },
  {
    name: "visible4",
    component: <ComponentContainer>Visible4</ComponentContainer>,
  },
  {
    name: "visible5",
    component: <ComponentContainer>Visible5</ComponentContainer>,
  },
  {
    name: "hidden4",
    component: <ComponentContainer>Hidden4</ComponentContainer>,
    isHidden: true,
  },
  {
    name: "hidden5",
    component: <ComponentContainer>Hidden5</ComponentContainer>,
    isHidden: true,
  },
  {
    name: "hidden6",
    component: <ComponentContainer>Hidden6</ComponentContainer>,
    isHidden: true,
  },
];

export const ModalStepperWithFirstHidden: Story = {
  args: {
    steps,
    onStepChange: (value, name) => {
      console.log("Value", value, name);
    },
  },
};