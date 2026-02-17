
import { DateRangePickerBaseInputAdornment, DateRangePickerBaseInputAdornmentProps } from "./DateRangePickerBaseInputAdornment";
import React from "react";
import {SbDecorator} from "@test-utils/get-storybook-decorator";


export default SbDecorator({
  title: "Vanguard/DateRangePicker/DateRangePickerBase/DateRangePickerBaseInputAdornment",
  component: DateRangePickerBaseInputAdornment,
});

export const DateRangePickerBaseInputAdornmentStory = (props:DateRangePickerBaseInputAdornmentProps) => {
  return (
    <div >
        <DateRangePickerBaseInputAdornment {...props}>ImplementME</DateRangePickerBaseInputAdornment>
    </div>
  );
};

