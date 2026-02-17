import { StepperDoRequestFn } from '@custom-hooks/use-stepper/helpers/use-go-to-step-after-request';

export type StepperFn<V, T = unknown> = (data?: T, goToStep?: StepperDoRequestFn<V>) => Promise<any>;
export type StepOrFn<V, T = unknown> = V | StepperFn<V, T>;
