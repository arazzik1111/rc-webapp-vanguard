import React from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { EnhancedStore } from "@reduxjs/toolkit";
import { GlobalTestWrapper } from "../src/test-utils/vitest.setup";

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  customStore?: EnhancedStore;
}

const render = (
  ui: React.ReactElement,
  options?: CustomRenderOptions,
  store?: EnhancedStore
) => {
  const { customStore, ...renderOptions } = options || {};
  const storeToUse = store || customStore;

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <GlobalTestWrapper customStore={storeToUse}>
      {children}
    </GlobalTestWrapper>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// Re-export everything
export * from "@testing-library/react";
export { render };

// Export screen as appScreen for compatibility
export { screen as appScreen } from "@testing-library/react";