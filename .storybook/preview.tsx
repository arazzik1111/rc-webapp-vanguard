import type { Preview } from "@storybook/react-vite";
// import "./theming/direct-channel/direct-channel.scss";
import "./theming.css";
import React, { useEffect } from "react";
import { ModalService } from "../src/core/Modal/ModalService";

// Global modal cleanup function
const closeAllModals = async () => {
  ModalService.closeLoadingModal();
  ModalService.closeConfirmModal();
  ModalService.closeErrorModal();
  // Small delay to ensure cleanup
  await new Promise((resolve) => setTimeout(resolve, 100));
};

// Wrapper component that handles modal cleanup
const ModalCleanupWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Close all modals when component mounts (before each story)
    closeAllModals();
  }, []);

  return (
    <div
      className={"react-container"}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div id="modal-root"></div>
      {children}
    </div>
  );
};
const preview: Preview = {
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => {
      // Close all modals before rendering each story
      const cleanupAndRender = async () => {
        return (
          <div
            className={"react-container"}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Story />
          </div>
        );
      };

      // For now, just render synchronously and handle cleanup in useEffect
      return (
          <Story />
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
