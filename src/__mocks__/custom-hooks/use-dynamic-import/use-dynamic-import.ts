const useDynamicImport = (): { error: null; loading: boolean; SvgIcon: string } => {
  // Return a simple SVG string for testing
  const mockSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4" fill="currentColor"/></svg>';

  return {
    error: null,
    loading: false,
    SvgIcon: mockSvg,
  };
};

export { useDynamicImport };
