import { useFormConfig } from '@custom-hooks/useFormConfig';
import { CheckBoxRootState, CheckBoxSlice } from '@vanguard/CheckBox/stories/bootstrap/CheckBox.slice';

export const useCheckboxFormConfig = () => {
  return useFormConfig({
    reducer: (state: CheckBoxRootState & any) => state.CheckBox,
    slice: CheckBoxSlice,
    inputs: {
      checkbox: {
        validation: {
          required: true,
        },
      },
    },
  });
};
