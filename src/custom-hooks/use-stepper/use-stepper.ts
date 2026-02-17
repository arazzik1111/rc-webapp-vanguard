import { useEffect, useRef, useState } from 'react';
import { Step } from '@vanguard/Modal/ModalStepper/ModalStepper';
import { ModalFooterProps } from '@vanguard/Modal/ModalFooter/ModalFooter';
import { IconNames } from '@vanguard/Icon/IconNames';

export const useStepper = (
  steps?: Step[],
  activeStep?: string | number,
  /**
   * @deprecated This should not be use anymore since it triggers before an actual step change
   * Remained here to support rsa
   */
  onStepChange?: (currentStep: number | null, stepName: string, step: Step) => void,
  onStepChangeName?: (currentStep: number | null, stepName: string, step: Step) => void,
  scrollToTopWhenStepChange: boolean = true,
) => {
  const [innerSteps, setInnerSteps] = useState<Step[]>([]);
  const lastActiveStep = useRef(0);
  const [innerVisibleSteps, setInnerVisibleSteps] = useState<Step[]>([]);
  const [stepValue, setStepValue] = useState<number | null>(null);
  const originalActions = useRef<Record<string, ModalFooterProps>>({});
  const [currentStepOpts, setCurrentStepOpts] = useState<Step | null>(null);

  const bindAutoActionsToStep = (stepOpts: Step) => {
    const step: Step = stepOpts;
    const stepIndex = getStepIndexByName(innerSteps ?? [], step.name) ?? -1;
    const stepIndexInVisible = getStepIndexByName(innerVisibleSteps ?? [], step.name) ?? -1;
    const visibleSteps = innerSteps?.filter((s) => !s.isHidden);

    const action = originalActions.current[step.name];
    const hasPositiveCta = action?.positive !== undefined;
    const hasNegativeCta = action?.negative !== undefined;
    /**
     * If autonext is not set as an opt then we set it as default as true
     * */
    if (typeof step.autoNext === 'undefined') {
      step.autoNext = true;
    }
    if (typeof step.autoBack === 'undefined') {
      step.autoBack = true;
    }

    /**
     * Generate some default footer options if they do not exist
     * This helps us out when tacking on functions
     * */
    if (!step.footerOptions) {
      // footer options are not mandatory ,so we create some defaults based on current step
      step.footerOptions = {};
    }
    /**
     * If we have anu function as a default we set autonext to false
     * Then we do not go the next after user went where he wanted
     * */
    if (hasPositiveCta) {
      step.autoNext = false;
    }
    if (hasNegativeCta) {
      step.autoBack = false;
    }

    /**
     * No footer opts, no problem we generate some defaults
     * */
    if (step.footerOptions.positive === undefined) {
      step.footerOptions.positive = {
        disabled: step.nextDisabled ?? false,
        isLoading: step.nextLoading ?? false,
        autogen: true,
        text: stepIndexInVisible !== visibleSteps?.length ? 'Next' : 'Finish',
        icon: stepIndexInVisible !== visibleSteps?.length ? IconNames.arrowRight : undefined,
        cta: () => {},
      };
    }
    if (step.footerOptions.negative === undefined) {
      step.footerOptions.negative = {
        autogen: true,
        disabled: step.previousDisabled ?? false,
        isLoading: step.previousLoading ?? false,
        icon: stepIndexInVisible === 1 ? IconNames.caretRight : undefined,
        text: stepIndexInVisible === 1 ? 'Cancel' : 'Back',
        cta: () => {},
      };
    }

    if (step.autoNext && step.footerOptions.positive) {
      // generateAutonext
      step.footerOptions.positive.cta = () => {
        let toGo = -1;

        if (step.isHidden && innerSteps) {
          for (let i = stepIndex - 1; i <= innerSteps?.length; i++) {
            if (!innerSteps[i].isHidden) {
              if (toGo === -1) {
                toGo = i + 1;
              }
            }
          }
        } else {
          if (visibleSteps && stepIndexInVisible + 1 <= visibleSteps.length) {
            goToStepByIndex(stepIndexInVisible + 1, false);
          }
        }
        goToStepByIndex(toGo);
      };
    }

    if (step.autoBack && step.footerOptions.negative) {
      // generateAutonext

      step.footerOptions.negative.cta = () => {
        let toGo = -1;
        if (step.isHidden && innerSteps) {
          for (let i = stepIndex - 1; i >= 0; i--) {
            if (!innerSteps[i].isHidden) {
              if (toGo === -1) {
                toGo = i + 1;
              }
            }
          }
        } else {
          if (visibleSteps && stepIndexInVisible - 1 >= 0) {
            goToStepByIndex(stepIndexInVisible - 1, false);
          }
        }
        goToStepByIndex(toGo);
      };
    }

    return step;
  };

  const getStepIndexByName = (steps: Step[], toFind: string) => {
    const step = steps.find((s) => s.name === toFind);
    if (step) {
      return steps.indexOf(step) + 1; // +1 internaly we keep position of steps as 1 , 2, 3 not 0 , 1, 2;
    }

    return -1;
  };

  const setCurrentActiveStep = (index: number, useHiddenSteps: boolean = false) => {
    if (!innerSteps) {
      return;
    }
    let stepsToUse = innerSteps;

    if (!useHiddenSteps) {
      // remove hidden steps if we are not forced to use them
      stepsToUse = innerSteps.filter((s) => !s.isHidden);
    }

    const stepsCpy = [...stepsToUse];

    let stepOpts = stepsCpy[index - 1];
    if (!stepOpts) {
      return;
    }

    stepOpts = bindAutoActionsToStep(stepOpts);
    setCurrentStepOpts(stepOpts);
    setStepValue(index);
  };

  const goToStepByIndex = (index: number, useHidden: boolean = false) => {
    setCurrentActiveStep(index, useHidden);
  };
  const goToStepByName = (name: string, useHidden: boolean = false) => {
    if (innerSteps && innerSteps.length > 0) {
      const stepIndex = getStepIndexByName(innerSteps, name);

      if (stepIndex > -1) {
        setCurrentActiveStep(stepIndex, useHidden);
      } else {
        throw new Error(`Step ${name} does not exist!`);
      }
    }
  };

  const goToStep = (step: number | string, useHidden: boolean = false) => {
    if (typeof step === 'string') {
      goToStepByName(step, useHidden);
    }
    if (typeof step === 'number') {
      goToStepByIndex(step, useHidden);
    }
  };

  /**
   * If we have a activeStep set we set it as the first option
   * If not we go the first step that is not hidden
   * */
  const calculateInitialStep = (steps: Step[] | undefined) => {
    if (!steps) return;
    if (activeStep) {
      goToStep(activeStep, true);
    } else {
      goToStep(1, false);
    }
  };

  /**
   * We need to extract the visible steps from given steps
   * These are used to show stepper
   *
   * */
  const extractVisibleSteps = (steps: Step[] | undefined) => {
    if (!steps) return;
    const visibleSteps = steps.filter((x) => !x.isHidden);
    setInnerVisibleSteps(visibleSteps);
  };
  /**
   * Create a map of the original actions we can use this to call them after we changed our internal logic
   * */
  const extractOriginalActions = (steps: Step[] | undefined) => {
    if (!steps) return;

    const actions: Record<string, any> = {};
    for (const step of steps) {
      actions[step.name] = {
        positive: step.footerOptions?.positive?.cta,
        negative: step.footerOptions?.negative?.cta,
      };
    }
    originalActions.current = actions;
  };

  // INIT
  useEffect(() => {
    extractOriginalActions(steps);

    if (steps) {
      extractVisibleSteps(steps);
      setInnerSteps(steps);
    }
  }, [steps]);

  useEffect(() => {
    if (innerSteps && innerSteps.length > 0) {
      calculateInitialStep(innerSteps);
    }
  }, [innerSteps]);

  /**
   * When active step changes we change our opts
   * Active step comes only from props
   * */
  useEffect(() => {
    if (activeStep) {
      goToStep(activeStep, true);
    }
  }, [activeStep]);

  let activeStepInStepper = 0;
  if (currentStepOpts?.isHidden) {
    activeStepInStepper = lastActiveStep.current ?? innerVisibleSteps.length;
  } else {
    if (innerSteps && currentStepOpts) {
      activeStepInStepper = getStepIndexByName(innerVisibleSteps, currentStepOpts?.name);
    } else {
      activeStepInStepper = 1;
    }
  }

  lastActiveStep.current = activeStepInStepper;

  useEffect(() => {
    if (onStepChange) {
      if (currentStepOpts) {
        const idx = getStepIndexByName(innerSteps, currentStepOpts.name);
        if (idx) {
          if (scrollToTopWhenStepChange) {
            // Make sure the body is at top after a step change
            Array.from(document.getElementsByClassName('modal-content')).forEach((el) => {
              el?.scroll(0, 0);
            });
          }

          onStepChange(idx, currentStepOpts.name, currentStepOpts);
        }
      }
    }

    if (onStepChangeName) {
      if (currentStepOpts) {
        const idx = getStepIndexByName(innerSteps, currentStepOpts.name);
        if (idx) {
          if (scrollToTopWhenStepChange) {
            // Make sure the body is at top after a step change
            Array.from(document.getElementsByClassName('modal-content')).forEach((el) => {
              el?.scroll(0, 0);
            });
          }

          onStepChangeName(idx, currentStepOpts.name, currentStepOpts);
        }
      }
    }
  }, [currentStepOpts?.name]);

  const toRet = {
    activeStepInStepper,
    innerVisibleSteps,
    currentStepOpts,
  };

  return toRet;
};
