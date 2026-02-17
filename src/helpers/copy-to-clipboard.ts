export const copyToClipboard = (text: string, callback?: (success: boolean, error?: Error) => void): Promise<void> => {
  return new Promise((resolve, reject) => {
    navigator.clipboard
      .writeText(text.trim())
      .then(() => {
        console.log('Widget code copied to clipboard');
        if (callback) callback(true);
        resolve(); // Resolve the promise on success
      })
      .catch((err) => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text.trim();
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          console.log('Widget code copied to clipboard using fallback');
          if (callback) callback(true);
          resolve(); // Resolve the promise on success
        } catch (fallbackErr) {
          console.error('Failed to copy text using fallback: ', fallbackErr);
          if (callback) callback(false, fallbackErr);
          reject(fallbackErr); // Reject the promise on failure
        }
        document.body.removeChild(textArea);
      });
  });
};
