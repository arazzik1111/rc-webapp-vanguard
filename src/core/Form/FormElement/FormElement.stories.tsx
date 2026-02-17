
import { FormElement, FormElementProps } from "./FormElement";
import React from "react";
import {SbDecorator} from "@test-utils/get-storybook-decorator";


export default SbDecorator({
  title: "Vanguard/Form/FormElement",
  component: FormElement,
});

export const FormElementStory = (props:FormElementProps) => {
  return (
    <div >
        <FormElement {...props}>ImplementME</FormElement>
    </div>
  );
};

