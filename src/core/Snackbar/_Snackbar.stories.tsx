import { SbDecorator, disableControls } from "@test-utils/get-storybook-decorator";
import React from "react";
import { StoryObj } from "@storybook/react";
import { snackbarService, SnackBarServiceProps, SnackbarType } from "@vanguard/SnackbarRoot/SnackBarService";
import { Button } from "@vanguard/Button/Button";
import { within, expect, userEvent } from "storybook/test";

// Create a custom component for the stories that accepts snackbar props
const SnackbarDemo = () => <div />;

export default {
  ...SbDecorator({
    title: "Vanguard/Snackbar",
    component: SnackbarDemo,
    extra: {
      argTypes: {
        ...disableControls(["children", "title"]),
        type: {
          control: { type: 'select' },
          options: ['info', 'success', 'danger', 'warning'],
          defaultValue: "info",
        },
        message: {
          control: { type: 'text' },
          defaultValue: "Snackbar example message",
        },
      },
    },
  }),
};


type Story = StoryObj<SnackBarServiceProps>;

export const SnackbarServiceDemo: Story = {
  args: {
    type: "info",
    message: "This is a snackbar message",
  },
  render: (args: SnackBarServiceProps) => {
    const addSnackbar = () => {
      snackbarService.open({
        type: args.type,
        title: '',
        message: args.message,
      });
    };

    return (
      <div style={{ padding: "20px" }}>
        <Button onClick={addSnackbar}>Show Snackbar</Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Snackbar");
    await expect(button).toBeInTheDocument();
  },
};

export const SuccessSnackbar: Story = {
  render: () => {
    const showSuccess = () => {
      snackbarService.openSuccessSnackbar("Operation completed successfully!");
    };

    return (
      <div style={{ padding: "20px" }}>
        <Button onClick={showSuccess}>Show Success Message</Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Success Message");
    await expect(button).toBeInTheDocument();

    // Click the button to show snackbar
    await userEvent.click(button);

    // Wait a bit for the snackbar to appear
    await new Promise((resolve) => setTimeout(resolve, 100));
  },
};

export const ErrorSnackbar: Story = {
  render: () => {
    const showError = () => {
      snackbarService.openErrorSnackbar("Something went wrong. Please try again.");
    };

    return (
      <div style={{ padding: "20px" }}>
        <Button onClick={showError}>Show Error Message</Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Error Message");
    await expect(button).toBeInTheDocument();

    // Click the button to show snackbar
    await userEvent.click(button);

    // Wait a bit for the snackbar to appear
    await new Promise((resolve) => setTimeout(resolve, 100));
  },
};

export const WarningSnackbar: Story = {
  render: () => {
    const showWarning = () => {
      snackbarService.openWarningSnackbar("This action cannot be undone.");
    };

    return (
      <div style={{ padding: "20px" }}>
        <Button onClick={showWarning}>Show Warning Message</Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Warning Message");
    await expect(button).toBeInTheDocument();

    // Click the button to show snackbar
    await userEvent.click(button);

    // Wait a bit for the snackbar to appear
    await new Promise((resolve) => setTimeout(resolve, 100));
  },
};

export const MultipleSnackbars: Story = {
  render: () => {
    const showMultiple = () => {
      snackbarService.openSuccessSnackbar("First message");
      setTimeout(() => {
        snackbarService.openWarningSnackbar("Second message");
      }, 1000);
      setTimeout(() => {
        snackbarService.openErrorSnackbar("Third message");
      }, 2000);
    };

    return (
      <div style={{ padding: "20px" }}>
        <Button onClick={showMultiple}>Show Multiple Messages</Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Multiple Messages");
    await expect(button).toBeInTheDocument();

    // Click the button to show multiple snackbars
    await userEvent.click(button);

    // Wait a bit for the first snackbar to appear
    await new Promise((resolve) => setTimeout(resolve, 100));
  },
};

export const WithCallback: Story = {
  render: () => {
    const showWithCallback = () => {
      snackbarService.openSuccessSnackbar("Message with callback", () => {
        console.log("Snackbar was closed!");
      });
    };

    return (
      <div style={{ padding: "20px" }}>
        <Button onClick={showWithCallback}>Show Message with Callback</Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText("Show Message with Callback");
    await expect(button).toBeInTheDocument();

    // Click the button to show snackbar
    await userEvent.click(button);

    // Wait a bit for the snackbar to appear
    await new Promise((resolve) => setTimeout(resolve, 100));
  },
};
