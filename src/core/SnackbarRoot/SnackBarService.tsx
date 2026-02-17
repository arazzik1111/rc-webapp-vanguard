import { PUB_SUB_EVENTS, pubSubService } from '@helpers/pub-sub';

import { translationService } from '../../services/translation.service';
import { TextReplacements } from '../Text/Text';

export type SnackbarType = 'success' | 'danger' | 'info' | 'warning';
export type SnackBarMessage = string | { text: string; replacements?: TextReplacements };
export type SnackBarServiceProps = {
  type: SnackbarType;
  title: string;
  message: string;
  onClose?: () => void;
};

/**
 * SnackBar Service Class
 * ---------------------------------------------------------------------------------------------------------------------
 */
class SnackBarServiceClass {
  /**
   * Close
   */
  closeEv(id: string) {
    pubSubService.$pub(PUB_SUB_EVENTS.reactSnackbarClose, { id });
  }

  /**
   * Open
   */
  open({ type, title, message, onClose }: SnackBarServiceProps) {
    const id = `${Math.random()}`;
    pubSubService.$pub(PUB_SUB_EVENTS.reactSnackbarOpen, { type, title, message, onClose });
    return id;
  }

  /**
   * Open Success
   */
  openWarningSnackbar(message: SnackBarMessage, onClose?: () => void) {
    this.open({
      type: 'warning',
      title: '',
      message: this.parseMessage(message),
      onClose,
    });
  }

  /**
   * Open Success
   */
  openSuccessSnackbar(message: SnackBarMessage, onClose?: () => void) {
    this.open({
      type: 'success',
      title: '',
      message: this.parseMessage(message),
      onClose,
    });
  }

  /**
   * Open Error
   */
  openErrorSnackbar(message: SnackBarMessage, onClose?: () => void) {
    this.open({
      type: 'danger',
      title: '',
      message: this.parseMessage(message),
      onClose,
    });
  }

  /**
   * On
   */
  on(event: any, callback: (details: any) => any) {
    document.addEventListener(event, (e) => callback(e.detail));
  }

  /**
   * Parse message
   */
  parseMessage(message: SnackBarMessage): string {
    if (typeof message !== 'string') {
      const { text, replacements } = message;
      return translationService.get(text, replacements).value;
    }

    return message;
  }
}

export const snackbarService = new SnackBarServiceClass();
