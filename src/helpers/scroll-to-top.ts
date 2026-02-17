export const useScrollToTop = () => {
  const scrollToTop = (element: React.RefObject<HTMLElement | HTMLDivElement> | HTMLElement | HTMLDivElement) => {
    if ('current' in element) {
      // @ts-ignore
      window.element = element;
      element.current?.scrollTo(0, 0);
    } else {
      element.scrollTo(0, 0);
    }
  };

  return scrollToTop;
};
