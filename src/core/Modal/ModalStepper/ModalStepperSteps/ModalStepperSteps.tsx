import { dFlex, mr1 } from '@globalStyles';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { ModalStepperStep } from '@vanguard/Modal/ModalStepper/ModalStepperSteps/ModalStepperStep/ModalStepperStep';
import React, { useEffect, useState } from 'react';

export interface ModalStepperStepsProps {
  activeIndex: number;
  stepsCount: number;
}

export const ModalStepperSteps = (props: ModalStepperStepsProps) => {
  const { activeIndex, stepsCount } = props;
  const [countArr, setCountArr] = useState(Array(stepsCount).fill(0));

  useEffect(() => {
    setCountArr(Array(stepsCount).fill(0));
  }, [stepsCount]);

  return (
    <ComponentContainer className={dFlex}>
      {countArr.map((el, idx) => {
        return (
          <div key={idx} className={mr1}>
            <ModalStepperStep isActive={activeIndex === idx + 1} />
          </div>
        );
      })}
    </ComponentContainer>
  );
};
