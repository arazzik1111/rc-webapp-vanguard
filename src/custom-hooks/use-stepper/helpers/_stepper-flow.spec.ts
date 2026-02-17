import { describe, expect, it } from 'vitest';

import { StepperFlow } from './stepper-flow';

describe('StepperFlow', () => {
  it('should add steps correctly', () => {
    const flow = new StepperFlow().step('step1').step('step2').step('step3');

    expect(flow.steps).toEqual([
      { current: 'step1', prev: undefined, next: undefined },
      { current: 'step2', prev: undefined, next: undefined },
      { current: 'step3', prev: undefined, next: undefined },
    ]);
  });

  it('should get step details correctly', () => {
    const flow = new StepperFlow().step('step1').step('step2').step('step3');

    const result = flow.get('step2');

    expect(result).toEqual({
      PREV_STEP: 'step1',
      CURRENT_STEP: 'step2',
      NEXT_STEP: 'step3',
    });
  });

  it('should handle missing prev and next correctly', async () => {
    const flow = new StepperFlow().step('step1').step('step2').step('step3');

    const firstStep = flow.get('step1');
    const middleStep = flow.get('step2');
    const lastStep = flow.get('step3');

    expect(firstStep).toEqual({
      PREV_STEP: expect.any(Function), // Anonymous fallback function
      CURRENT_STEP: 'step1',
      NEXT_STEP: 'step2',
    });

    expect(middleStep).toEqual({
      PREV_STEP: 'step1',
      CURRENT_STEP: 'step2',
      NEXT_STEP: 'step3',
    });

    expect(lastStep).toEqual({
      PREV_STEP: 'step2',
      CURRENT_STEP: 'step3',
      NEXT_STEP: expect.any(Function), // Anonymous fallback function
    });
  });

  it('should throw an error for a step not found', () => {
    const flow = new StepperFlow().step('step1').step('step2').step('step3');

    expect(() => flow.get('step4')).toThrow('Step not found');
  });

  it('should handle custom prev and next values', () => {
    const flow = new StepperFlow()
      .step('step1', undefined, 'step2')
      .step('step2', 'step1', 'step3')
      .step('step3', 'step2');

    const result = flow.get('step2');

    expect(result).toEqual({
      PREV_STEP: 'step1',
      CURRENT_STEP: 'step2',
      NEXT_STEP: 'step3',
    });
  });
});
