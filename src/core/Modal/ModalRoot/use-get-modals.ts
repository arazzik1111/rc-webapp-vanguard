import { PublicWidgetData } from '@stores/public-widgets-data.store';

export type ModalRootState = { growModals: string[]; slideModals: string[]; popModals: string[] };
export const useGetModals = (modals: ModalRootState) => {
  let { growModals, slideModals, popModals } = modals;

  const instance = PublicWidgetData.getInstance();
  const { widgetId } = instance.get();

  // if it is a widget we filter out all other modals
  // since multiple widgets on the page exist multiple instances of modals will open

  const isOfWidget = (modalId: string, widgetId: string): boolean => {
    return modalId.includes(widgetId);
  };

  // console.log('here', slideModals, widgetId)
  // console.log('here', growModals, widgetId)

  if (widgetId) {
    growModals = growModals.filter((modalId) => isOfWidget(modalId, widgetId));
    slideModals = slideModals.filter((modalId) => isOfWidget(modalId, widgetId));
    popModals = popModals.filter((modalId) => isOfWidget(modalId, widgetId));
  }

  // console.log('hereadter', slideModals, widgetId)
  // console.log('hereafter', growModals, widgetId)
  return { growModals, slideModals, popModals };
};
