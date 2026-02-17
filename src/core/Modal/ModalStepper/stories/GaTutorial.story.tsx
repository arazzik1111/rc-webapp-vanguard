import React, { useCallback, useMemo } from "react";
import { ComponentContainer } from "@vanguard/ComponentContainer/ComponentContainer";
import { Modal } from "@vanguard/Modal/Modal";
import { ModalStepper } from "../ModalStepper";
import { Story } from "./_ModalStepper.default";
import { fn } from "storybook/test";

export const GaTutorial: Story = {
  render: () => {
    const skipCta = useCallback(() => {
      console.log("Skip tutorial");
    }, []);

    const finishCta = useCallback(() => {
      console.log("Finish tutorial");
    }, []);

    const stepperConfig = useMemo(
      () => [
        {
          name: "howItWorks",
          component: (
            <ComponentContainer>
              <h3>How responsive search ads work</h3>
              <p>
                They are the new type of ads provided by Google. Instead of having multiple ads in your campaign, you have one that changes depending on what your potential customers are searching for.
              </p>
              <p>Let's see how it is set up.</p>
            </ComponentContainer>
          ),
          footerOptions: {
            negative: {
              text: "Skip",
              cta: skipCta,
            },
          },
        },
        {
          name: "multipleHeadlinesAndDescriptions",
          component: (
            <ComponentContainer>
              <h3>Multiple headlines and descriptions</h3>
              <p>
                Based on your chosen ad versions we generate multiple headlines (titles) and descriptions. Below you can see some examples.
              </p>
              <p>You can add up to %max_no_of_items%</p>
            </ComponentContainer>
          ),
        },
        {
          name: "responsiveAdGeneration",
          component: (
            <ComponentContainer>
              <h3>The responsive ad is generated</h3>
              <p>
                Google will use the headlines and descriptions to create different variations based on what your potential customers will search. Below you can see a simulation that show how these variations are displayed.
              </p>
            </ComponentContainer>
          ),
          footerOptions: {
            positive: {
              text: "Finish",
              cta: finishCta,
            },
          },
        },
      ],
      [skipCta, finishCta]
    );

    return (
      <Modal>
        <ModalStepper steps={stepperConfig} variant={"bottom"} />
      </Modal>
    );
  },
};