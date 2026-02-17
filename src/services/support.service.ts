import { rcWindow } from '@stores/window.store';

class SupportService {
  hasIntercom(): boolean {
    // DC and other resellers have Intercom
    return rcWindow.hasOwnProperty('Intercom');
  }

  showIntercom() {
    rcWindow.Intercom('show');
  }

  hasIonosSupport(): boolean {
    // Ionos 1and1 has proprietary Support Button
    return document.querySelector('[data-target-id=oao-navi-support-button]') !== null;
  }

  showIonosSupport() {
    try {
      const ionosSupport = document.querySelector('[data-target-id=oao-navi-support-button]') as HTMLElement;
      ionosSupport.click();
    } catch (error) {
      console.error('Error | SupportService | Cannot open Ionos Support, because: ', error);
    }
  }

  hasAnySupportService(): boolean {
    return this.hasIntercom() || this.hasIonosSupport();
  }

  show() {
    try {
      if (this.hasIntercom()) {
        this.showIntercom();
      } else if (this.hasIonosSupport()) {
        this.showIonosSupport();
      } else {
        console.error('Error | SupportService | Cannot open Support Chat, because no Support Service is available');
      }
    } catch (error) {
      console.error('Error | SupportService | Cannot open Support Chat, because: ', error);
    }
  }
}

export const supportService = new SupportService();
