import { rcWindow } from '@stores/window.store';
import { ModalService } from '@vanguard/Modal/ModalService';

type ResellerUpsellingModal = {
  open: () => void;
};

export const showResellerUpsellingModal = (
  completeCampaignModalId: string | null,
  upsellingLink: string,
  apiUserId: number | null,
): ResellerUpsellingModal => {
  const open = () => {
    apiUserId = parseInt(String(apiUserId));

    switch (apiUserId) {
      case 176:
        if (completeCampaignModalId) {
          ModalService.closeEv(completeCampaignModalId);
        }

        const OAO = rcWindow.OAO || {}; // OAO refers to the global OAO variable.
        OAO.q.pageintegration.push(['openOverlay', upsellingLink, true]);

        // if bkshop is not displayed, then we redirect to a new page in order to upsell the customer
        setTimeout(() => {
          if (
            !(window.location === window.parent.location || window.self === window.top) ||
            !(document.getElementsByClassName('oao-pi-overlay-content').length > 0)
          ) {
            rcWindow.top.location.replace(upsellingLink);
          } else {
            const upsellingModalOverlay = document.getElementsByClassName(
              'oao-pi-overlay-blocker',
            ) as HTMLCollectionOf<HTMLElement>;
            const upsellingModalContainer = document.getElementsByClassName(
              'oao-pi-overlay-container',
            ) as HTMLCollectionOf<HTMLElement>;
            upsellingModalOverlay[0].style.zIndex = '1100';
            upsellingModalContainer[0].style.zIndex = '1101';
          }
        }, 500);

        break;
      default:
        break;
    }
  };

  const resellerUpsellingModal: ResellerUpsellingModal = {
    open: open,
  };

  return resellerUpsellingModal;
};
