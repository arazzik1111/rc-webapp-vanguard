import { within } from 'storybook/test';

/**
 * Helper function to get the input element from InputBase component
 * Handles different input types including password and number inputs
 */
export const getInputBaseElement = (canvasElement: HTMLElement, inputType?: string): HTMLElement => {
  const canvas = within(canvasElement);

  if (inputType === 'password') {
    // Password inputs don't have textbox role, use querySelector instead
    const passwordInput = canvasElement.querySelector('input[type="password"]') as HTMLElement;
    if (!passwordInput) {
      throw new Error('Password input not found');
    }
    return passwordInput;
  } else if (inputType === 'number') {
    // Number inputs might not have textbox role, use querySelector instead
    const numberInput = canvasElement.querySelector('input[type="number"]') as HTMLElement;
    if (!numberInput) {
      throw new Error('Number input not found');
    }
    return numberInput;
  }

  // For other input types, try to get by role first
  try {
    const textboxElements = canvas.getAllByRole('textbox');
    // Return the last textbox element (usually the actual input, not the label)
    return textboxElements[textboxElements.length - 1];
  } catch (error) {
    // Fallback to querySelector if role-based selection fails
    const input = canvasElement.querySelector('input') as HTMLElement;
    if (!input) {
      throw new Error(`Input element not found for type: ${inputType || 'text'}`);
    }
    return input;
  }
};

/**
 * Helper function to get input element by test ID
 */
export const getInputBaseElementByTestId = (canvasElement: HTMLElement, testId: string): HTMLElement => {
  const canvas = within(canvasElement);
  return canvas.getByTestId(testId);
};
