export const convertUrlToBase64 = async (url: string) => {
  try {
    // Fetch the image as a Blob
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    const blob = await response.blob();

    // Read the Blob as a data URL
    const reader = new FileReader();
    const base64StringPromise = new Promise<string>((resolve, reject) => {
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result || '');
        } else {
          reject(new Error('Failed to read image as base64.'));
        }
      };
    });

    reader.readAsDataURL(blob);

    const base64String = await base64StringPromise;

    return base64String;
  } catch (error) {
    console.error('Error fetching or converting image:', error);
    throw error; // Rethrow the error to propagate it further if needed
  }
};
