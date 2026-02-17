import { StepperFn } from '@custom-hooks/use-stepper/types/StepOrFn';
import { EMPTY, firstValueFrom } from 'rxjs';

type StepFlow<T> = T; //T is usualy a string or an enum
type StepFlowFn<T> = T | StepperFn<T>;

export class StepperFlow<Steps = unknown> {
  steps: Array<{
    prev?: StepFlowFn<Steps>;
    current: StepFlow<Steps>;
    next?: StepFlowFn<Steps>;
  }> = [];

  step(current: StepFlow<Steps>, prev?: StepFlowFn<Steps>, next?: StepFlowFn<Steps>): StepperFlow<Steps> {
    this.steps.push({
      prev,
      current,
      next,
    });
    return this;
  }

  get(step: StepFlow<Steps>): {
    PREV_STEP: StepFlowFn<Steps>;
    CURRENT_STEP: StepFlow<Steps>;
    NEXT_STEP: StepFlowFn<Steps>;
  } {
    const index = this.steps.findIndex((s) => s.current === step);

    if (index === -1) {
      throw new Error('Step not found');
    }

    const currentStep = this.steps[index];
    const prevStep: StepFlowFn<Steps> | undefined =
      currentStep.prev || (index > 0 ? this.steps[index - 1].current : undefined);
    const nextStep: StepFlowFn<Steps> | undefined =
      currentStep.next || (index < this.steps.length - 1 ? this.steps[index + 1].current : undefined);

    return {
      PREV_STEP: prevStep ?? (() => firstValueFrom(EMPTY)), // Safe fallback
      CURRENT_STEP: currentStep.current,
      NEXT_STEP: nextStep ?? (() => firstValueFrom(EMPTY)), // Safe fallback
    };
  }
}
