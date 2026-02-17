export const calculateMarginForReactContainer = (actionBarHeight: number) => {
  let offset = 114;

  if (actionBarHeight > 0) {
    offset = actionBarHeight;
  }

  const fakeCursorHeight = document.getElementById('fake-cursor')?.clientHeight ?? 0;
  if (fakeCursorHeight > 0) {
    offset = offset - fakeCursorHeight;
  }

  if (offset <= 0) {
    offset = 64;
  }

  return `${offset + 8}px`;
};
