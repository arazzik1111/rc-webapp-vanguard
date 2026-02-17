import { rcWindow } from '@stores/window.store';

export const buildSpecificFunction = () => {
  //@ts-ignore
  return rcWindow['BUILD_SYSTEM'];
};
