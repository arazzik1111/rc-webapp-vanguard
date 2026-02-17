import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { BigAssEditModal } from "../BigAssEditModal";
import { Story, mockSaveCallback, mockCancelCallback, mockClose, closeAllModals } from "./_BigAssEditModal.default";
import { wait } from "@helpers/wait.ts";

const ComplexFormContent = () => (
  <div>
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" defaultValue="John Doe" style={{ width: "100%", padding: "8px" }} />
    </div>
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" defaultValue="john@example.com" style={{ width: "100%", padding: "8px" }} />
    </div>
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="bio">Bio:</label>
      <textarea
        id="bio"
        defaultValue="This is a sample bio text that demonstrates how the modal handles larger content areas."
        rows={4}
        style={{ width: "100%", padding: "8px" }}
      />
    </div>
    <div style={{ marginBottom: "20px" }}>
      <label>Preferences:</label>
      <div>
        <input type="checkbox" id="newsletter" defaultChecked />
        <label htmlFor="newsletter">Subscribe to newsletter</label>
      </div>
      <div>
        <input type="checkbox" id="notifications" />
        <label htmlFor="notifications">Enable notifications</label>
      </div>
    </div>
  </div>
);

export const WithCustomContent: Story = {
  args: {
    title: "Advanced Profile Editor",
    description: "Edit your profile with rich form controls and validation",
    children: <ComplexFormContent />,
    savable: true,
    savingInProgress: false,
    saveCallback: mockSaveCallback,
    cancelCallback: mockCancelCallback,
    close: mockClose,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Close any remaining modals from previous tests
    await closeAllModals();

    // Open modal
    const openButton = canvas.getByRole('button', { name: /open modal/i });
    await userEvent.click(openButton);

    // Verify complex form elements are rendered
    await expect(canvas.getByLabelText("Name:")).toBeInTheDocument();
    await expect(canvas.getByLabelText("Email:")).toBeInTheDocument();
    await expect(canvas.getByLabelText("Bio:")).toBeInTheDocument();

    // Verify checkboxes are present
    await expect(canvas.getByLabelText("Subscribe to newsletter")).toBeInTheDocument();
    await expect(canvas.getByLabelText("Enable notifications")).toBeInTheDocument();

    // Verify Save button works with complex content
    const saveButton = canvas.getByRole('button', { name: /save/i });
    await expect(saveButton).toBeEnabled();

    // Test that modal handles scrolling for large content
    const modalBody = canvas.getByText("This is a sample bio text that demonstrates how the modal handles larger content areas.");
    await expect(modalBody).toBeInTheDocument();

    // Close the modal
    const cancelButton = canvas.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);
    await wait(0);

    await expect(canvas.queryByText("Advanced Profile Editor")).not.toBeInTheDocument();
  },
  render: (args) => {
    const openModal = () => {
      ModalService.open(
        <BigAssEditModal
          title={args.title}
          description={args.description}
          children={args.children}
          savable={args.savable}
          savingInProgress={args.savingInProgress}
          saveCallback={args.saveCallback}
          cancelCallback={args.cancelCallback}
          close={args.close}
        />
      );
    };

    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
      </div>
    );
  },
};