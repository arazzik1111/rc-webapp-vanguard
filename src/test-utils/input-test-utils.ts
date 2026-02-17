import { userEvent, within } from 'storybook/test';

interface WriteInInputOptions {
  delay?: number;
}

/**
 * Helper function to simulate typing text into an input field
 * @param testId - The test ID of the input element
 * @param text - The text to type into the input
 * @param canvas - The canvas context from within(canvasElement)
 * @param options - Configuration options including delay
 */
export const writeInInput = async (
  testId: string,
  text: string,
  canvas: ReturnType<typeof within>,
  options: WriteInInputOptions = {},
): Promise<void> => {
  const { delay = 0 } = options;

  // Find the container element by test ID, then find the actual input element within it
  const containerElement = canvas.getByTestId(testId);

  // Try different methods to find the input element
  let inputElement: HTMLElement | null = null;

  try {
    inputElement = within(containerElement).getByRole('textbox');
  } catch {
    try {
      inputElement = within(containerElement).getByRole('spinbutton'); // for number inputs
    } catch {
      // Fallback to querySelector
      inputElement = containerElement.querySelector('input') as HTMLElement;
    }
  }

  if (!inputElement) {
    throw new Error(`Could not find input element within container with testId: ${testId}`);
  }

  // Set up user event with delay if specified
  const user = userEvent.setup({ delay });

  // Clear the input first
  await user.clear(inputElement);

  // Only type if text is not empty
  if (text.length > 0) {
    await user.type(inputElement, text);
  }
};
