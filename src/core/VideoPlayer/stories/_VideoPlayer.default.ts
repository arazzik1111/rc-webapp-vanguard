import { StoryObj } from '@storybook/react';
import { VideoPlayer, VideoPlayerProps } from '../VideoPlayer';
import { fn, within, expect, waitFor } from 'storybook/test';

// Story type
export type Story = StoryObj<typeof VideoPlayer>;

/**
 * Mock data
 */
export const mockVideoSrc =
  'https://media.rankingcoach.com/tutorials/en/local_seo/usa_creation_google_account.mp4';

export const mockFallbackSrc =
  'https://media.rankingcoach.com/tutorials/en/g4a_property/en_g4a_property.mp4';

export const mockOnReady = fn();

export const mockTracks = [
  {
    kind: 'subtitles' as const,
    src: 'https://example.com/subtitles.vtt',
    srclang: 'en',
    label: 'English',
    default: true,
  },
  {
    kind: 'captions' as const,
    src: 'https://example.com/captions.vtt',
    srclang: 'en',
    label: 'English Captions',
  },
];

/**
 * Story args
 */
export const defaultProps: VideoPlayerProps = {
  opts: {
    src: mockVideoSrc,
  },
};
// Used by the fallback story – onReady is needed so we can poke the player instance.
export const fallbackProps: VideoPlayerProps = {
  opts: {
    src: 'https://invalid-url.com/video.mp4', // Invalid URL to trigger fallback
    fallbackSrc: mockFallbackSrc,
  },
  onReady: mockOnReady,
};

export const tracksProps: VideoPlayerProps = {
  opts: {
    src: mockVideoSrc,
    tracks: mockTracks,
  },
  onReady: mockOnReady,
};

/**
 * Generic player test used by several stories
 */
export const videoPlayerTest =
  async ({
           canvasElement,
           expectedSrc,
         }: {
    canvasElement: HTMLElement;
    expectedSrc?: string;
  }) => {
    const canvas = within(canvasElement);

    // 1. Find the wrapper
    const videoContainer = await canvas.findByTestId('video-player');
    expect(videoContainer).toBeInTheDocument();
    expect(videoContainer).toHaveAttribute('data-vjs-player');

    // 2. Wait for the <video> element created by video.js (HTML5 only)
    const videoElement = await waitFor(() => {
      const el = videoContainer.querySelector('video') as HTMLVideoElement | null;
      if (!el) {
        throw new Error('video element not ready yet');
      }
      return el;
    });

    expect(videoElement).toBeInTheDocument();

    if (!expectedSrc) return;

    // 3. Assert src for regular videos
    await waitFor(() => {
      const currentSrcAttr = videoElement.getAttribute('src') ?? videoElement.src;
      if (!currentSrcAttr) {
        throw new Error('video src not set yet');
      }

      // jsdom may resolve to an absolute URL, so use contains
      expect(currentSrcAttr).toContain(expectedSrc);
    });
  };
