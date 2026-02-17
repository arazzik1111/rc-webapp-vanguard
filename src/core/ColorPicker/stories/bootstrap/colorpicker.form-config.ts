import { useFormConfig } from '@custom-hooks/useFormConfig';

import { ColorPickerRootState, ColorPickerSlice } from './colorpicker.test.slice';

export const useColorPickerFormConfig = () => {
  return useFormConfig({
    reducer: (state: ColorPickerRootState & any) => state.colorPicker,
    slice: ColorPickerSlice,
    inputs: {
      color: {
        fieldType: 'ColorPicker',
        validation: {
          validateHexColor: true,
        },
      },
    },
  });
};
