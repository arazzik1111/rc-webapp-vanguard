import { useCallback, useRef } from 'react';

export type PopupOpener = {
  popupUrl: string;
  popupTitle?: string;
  responseCallback?: (message: MessageEvent) => void;
  onClose?: () => void;
  size?: {
    width: number;
    height: number;
  };
};

export const useAuthPopup = (): ((popupConfig: PopupOpener) => Window | null) => {
  const timersRef = useRef<number[]>([]);

  const clearTrackedTimer = (id: number) => {
    window.clearInterval(id);
    timersRef.current = timersRef.current.filter((t) => t !== id);
    // console.log(`[useAuthPopup] Cleared interval: ${id}`);
    // console.log(`[useAuthPopup] Active intervals after clear:`, [...timersRef.current]);
  };

  const openPopup = useCallback((popupConfig: PopupOpener): Window | null => {
    const w = popupConfig?.size?.width ?? 550;
    const h = popupConfig?.size?.height ?? 480;
    const left = screen.width / 2 - w / 2;
    const top = screen.height / 2 - h / 2;

    const popup = window.open(
      popupConfig.popupUrl,
      popupConfig.popupTitle ?? '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${top}, left=${left}`,
    );

    if (!popup) return null;

    const timer = window.setInterval(() => {
      // console.log(`[useAuthPopup] popup status: `, popup);

      if (popup.closed) {
        clearTrackedTimer(timer);
        window.removeEventListener('message', messageHandler);
        popupConfig.onClose?.();
      }
    }, 800);

    timersRef.current.push(timer);
    // console.log(`[useAuthPopup] Set interval: ${timer}`);
    // console.log(`[useAuthPopup] Active intervals after add:`, [...timersRef.current]);

    const messageHandler = (message: MessageEvent) => {
      // console.log(`[useAuthPopup] Closing via message:`, message.data);

      if (!message.data.event) return;
      clearTrackedTimer(timer);
      popupConfig.responseCallback?.(message);
      window.removeEventListener('message', messageHandler);
    };

    window.addEventListener('message', messageHandler);

    return popup;
  }, []);

  return openPopup;
};
