import { useFormConfig } from '@custom-hooks/useFormConfig';
import {
  AvatarCheckBoxRootState,
  AvatarCheckBoxSlice,
} from '@vanguard/AvatarCheckbox/stories/bootstrap/AvatarCheckBox.slice';

export const useAvatarCheckboxFormConfig = () => {
  return useFormConfig({
    reducer: (state: AvatarCheckBoxRootState & any) => state.AvatarCheckBox,
    slice: AvatarCheckBoxSlice,
    inputs: {
      avatarCheckbox: {
        validation: {
          required: true,
        },
      },
    },
  });
};
