import { hexToRgb } from '@mui/system';

export const hexToRgba = (hexColor: string, alpha: number) => {
  const rgb = hexToRgb(hexColor);
  const rgba = rgb.replace('rgb', 'rgba').replace(')', `,${alpha})`);
  return rgba;
};
