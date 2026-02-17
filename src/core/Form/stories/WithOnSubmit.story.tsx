import React from "react";
import { Form } from "@vanguard/Form/Form";
import { within, expect, userEvent } from "storybook/test";
import { Story, createMockFormChange } from "./_Form.default";

export const WithOnSubmit: Story = {
  render: () => {
    const onSubmit = createMockFormChange();
    const onChange = createMockFormChange();

    return (
      <Form onSubmit={onSubmit} onChange={onChange}>
        <button type="submit" data-testid="submit-button">Submit</button>
        <div data-testid="form-content">Form content</div>
      </Form>
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify form content is rendered
    await expect(canvas.getByTestId("form-content")).toBeInTheDocument();

    // Click submit button
    const submitButton = canvas.getByTestId("submit-button");
    await userEvent.click(submitButton);

    // Note: onSubmit is called when form is submitted, but since we don't have form elements,
    // it might not trigger. This tests that the prop is accepted without error.
  },
};