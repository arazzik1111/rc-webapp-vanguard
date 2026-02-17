import { useFormConfig } from '@custom-hooks/useFormConfig.ts';
import { InputBaseRootState, InputBaseSlice } from '@vanguard/_internal/InputBase/stories/bootstrap/InputBase.slice';

export const useInputBaseFormConfig = () => {
  return useFormConfig({
    reducer: (state: InputBaseRootState & any) => state.InputBase,
    slice: InputBaseSlice,
    inputs: {
      inputBase: {
        validation: {
          required: true,
          maxLength: 50,
        },
      },
    },
  });
};
