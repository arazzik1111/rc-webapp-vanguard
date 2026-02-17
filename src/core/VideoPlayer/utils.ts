export interface VideoSource {
  src: string;
  type: string;
  isYouTube?: boolean;
  youTubeId?: string;
}

/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param url - YouTube URL
 * @returns Video ID or null if not a valid YouTube URL
 */
export const extractYouTubeId = (url: string): string | null => {
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

/**
 * Checks if a URL is a YouTube URL
 * @param url - URL to check
 * @returns True if it's a YouTube URL
 */
export const isYouTubeUrl = (url: string): boolean => {
  return extractYouTubeId(url) !== null;
};

/**
 * Processes video source to determine if it's YouTube and extract necessary info
 * @param src - Video source URL
 * @param type - Video type (optional)
 * @returns Processed video source information
 */
export const processVideoSource = (src: string, type?: string): VideoSource => {
  if (isYouTubeUrl(src)) {
    const youTubeId = extractYouTubeId(src);
    return {
      src,
      type: 'video/youtube',
      isYouTube: true,
      youTubeId: youTubeId || undefined,
    };
  }

  return {
    src,
    type: type || 'video/mp4',
    isYouTube: false,
  };
};
