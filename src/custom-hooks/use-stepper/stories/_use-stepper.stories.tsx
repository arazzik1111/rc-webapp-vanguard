import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { useStep1Stepper, useStep2Stepper } from "@custom-hooks/use-stepper/stories/bootstrap/stepper.steps";
import { ModalStepper } from "@vanguard/Modal/ModalStepper/ModalStepper";
import React from "react";
import { useSelector } from "react-redux";
import {
  StepperRootState,
  StepperSLice,
  stepperStore,
} from "@custom-hooks/use-stepper/stories/bootstrap/stepper.slice";
import { StoryObj } from "@storybook/react/*";
import { queries, userEvent, within, expect } from "@storybook/test";
import { BoundFunctions } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event/dist/types/setup";

type TestStepperProps = {};

const TestStepper = (props: TestStepperProps) => {
  const { step } = useSelector((s: StepperRootState) => s.Stepper);
  const step1 = useStep1Stepper();
  const step2 = useStep2Stepper();
  const steps = [step1, step2];

  return (
    <div style={{ width: 400, height: 300, border: "1px solid lightgrey", padding: 40 }}>
      <ModalStepper slice={StepperSLice} modalBodyMode={"fill"} activeStep={step} steps={steps} />
    </div>
  );
};

export default {
  ...SbDecorator({
    title: "components/engagement/EngagementPlanner/EngagementPlannerCalendar/EngagementPlannerCalendarLoader",
    component: TestStepper,
    extra: {
      ...disableControls([""]),
    },
    opts: {
      customStore: stepperStore,
    },
  }),
};

type Story = StoryObj<typeof TestStepper>;

const pressContinue = async (canvas: BoundFunctions<typeof queries>, user: UserEvent) => {
  const continueButton = await canvas.findByRole("button", { name: "Continue" });
  await userEvent.click(continueButton);
};

const pressBack = async (canvas: BoundFunctions<typeof queries>, user: UserEvent) => {
  const backBtn = await canvas.findByRole("button", { name: "Back" });
  await userEvent.click(backBtn);
};

export const StepperStory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();
    await pressContinue(canvas, user);
    await pressBack(canvas, user);
    await pressContinue(canvas, user);
    const state = stepperStore.getState(); // Access the current Redux state
    const visualStep = canvas.queryByText("Step2");
    await expect(visualStep).toBeVisible();
    await expect(state.Stepper.stepStatus).toBe("clean");
    await expect(state.Stepper.step).toBe("step2");
  },
};
