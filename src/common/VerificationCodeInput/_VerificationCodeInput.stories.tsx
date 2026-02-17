import { VerificationCodeInput, VerificationCodeInputProps } from "./VerificationCodeInput";
import React from "react";
import { SbDecorator } from "@test-utils/get-storybook-decorator";

export default SbDecorator({
  title: "BuildingBlocks/VerificationCodeInput",
  component: VerificationCodeInput,
});

export const VerificationCodeInputStoryEmpty = (props: VerificationCodeInputProps) => {
  const values = props.values ?? [];
  const codeLength = props.codeLength ?? 6;
  const onlyNumeric = props.onlyNumeric ?? true;

  return (
    <div>
      <VerificationCodeInput
        codeLength={codeLength}
        values={values}
        onlyNumeric={onlyNumeric}
        onCodeChanged={props.onCodeChanged}
      ></VerificationCodeInput>
    </div>
  );
};

export const VerificationCodeInputStoryPartiallyFilled = (props: VerificationCodeInputProps) => {
  const values = props.values ?? ["1", "2", "3"];
  const codeLength = props.codeLength ?? 6;
  const onlyNumeric = props.onlyNumeric ?? true;

  return (
    <div>
      <VerificationCodeInput
        codeLength={codeLength}
        values={values}
        onlyNumeric={onlyNumeric}
        onCodeChanged={props.onCodeChanged}
      ></VerificationCodeInput>
    </div>
  );
};

export const VerificationCodeInputStoryFilled = (props: VerificationCodeInputProps) => {
  const values = props.values ?? ["1", "2", "3", "4", "5", "6"];
  const codeLength = props.codeLength ?? 10;
  const onlyNumeric = props.onlyNumeric ?? true;

  return (
    <div>
      <VerificationCodeInput
        codeLength={codeLength}
        values={values}
        onlyNumeric={onlyNumeric}
        onCodeChanged={props.onCodeChanged}
      ></VerificationCodeInput>
    </div>
  );
};
