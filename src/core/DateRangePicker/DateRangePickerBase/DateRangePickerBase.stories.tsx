
import { DateRangePickerBase, DateRangePickerBaseProps } from "./DateRangePickerBase";
import React from "react";
import {SbDecorator} from "@test-utils/get-storybook-decorator";


export default SbDecorator({
  title: "Vanguard/DateRangePicker/DateRangePickerBase",
  component: DateRangePickerBase,
});

export const DateRangePickerBaseStory = (props:DateRangePickerBaseProps) => {
  return (
    <div >
        <DateRangePickerBase {...props}>ImplementME</DateRangePickerBase>
    </div>
  );
};

