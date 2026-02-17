import { breakpoints } from '@config/breakpoints.ts';
import { rcWindow } from '@stores/window.store';

/**
 * Device Service
 *
 * Notes: To get data while resizing the window use "useWindowResize" html/react/src/custom-hooks/use-window.resize.ts
 * ---------------------------------------------------------------------------------------------------------------------
 */
class DeviceService {
  clientWidth: number;

  constructor() {
    this.clientWidth = rcWindow.document.body.clientWidth;
  }

  isMobile() {
    return this.clientWidth <= breakpoints.mobile;
  }

  isTablet() {
    return this.clientWidth <= breakpoints.tablet;
  }

  isDesktop() {
    return this.clientWidth > breakpoints.tablet;
  }
}

export const deviceService = new DeviceService();
