import './VideoPlayer.styles.scss';
import './VideoPlayer.theme.scss';
import 'videojs-youtube';

import React, { useEffect, useRef } from 'react';
// import "../../../../scripts/vendor/video.js.theme.scss";
import videojs, { VideoJsPlayerOptions } from 'video.js';

import { processVideoSource } from './utils';

export interface VideoPlayerProps {
  opts: {
    src: string;
    fallbackSrc?: string;
    type?: string;
    tracks?: Array<{
      kind: 'subtitles' | 'captions' | 'chapters';
      src: string;
      srclang: string;
      label: string;
      default?: boolean;
    }>;
  };
  onReady?: (player: videojs.Player) => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<videojs.Player | null>(null);
  const hasTriedFallbackRef = useRef(false);
  const { opts, onReady } = props;
  const { src, type, tracks, fallbackSrc } = opts;

  useEffect(() => {
    // Process the video source to determine if it's YouTube
    const processedSource = processVideoSource(src, type);

    const options: VideoJsPlayerOptions = {
      playsinline: true,
      autoplay: false,
      controls: true,
      fluid: true,
      // aspectRatio: "16:9",
      responsive: true,
      preload: 'auto',
      techOrder: processedSource.isYouTube ? ['youtube', 'html5'] : ['html5'],
      plugins: {},

      // Disable Picture-in-Picture
      sources: [
        {
          src: processedSource.src,
          type: processedSource.type,
        },
      ],
      // Add tracks for captions/subtitles
      tracks: tracks || [],
    };

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video');

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current?.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;

      player.autoplay(options?.autoplay ?? false);
      player.src(options?.sources ?? []);

      // Update tracks if they exist
      if (tracks && tracks.length > 0) {
        // Remove existing remote text tracks using a safer approach
        while (player.remoteTextTracks().length > 0) {
          const track = player.remoteTextTracks()[0];
          if (track.kind === 'subtitles' || track.kind === 'captions') {
            try {
              // Cast to any to avoid type issues
              player.removeRemoteTextTrack(track as any);
            } catch (e) {
              // If removal fails, break to avoid infinite loop
              break;
            }
          } else {
            // If it's not a track we want to remove, break to avoid infinite loop
            break;
          }
        }

        // Add new tracks
        tracks.forEach((track) => {
          player.addRemoteTextTrack(track, false);
        });
      }
    }

    // if src changed, allow fallback again
    hasTriedFallbackRef.current = false;
  }, [src, type, tracks, onReady]);


  // Fallback error handler
  useEffect(() => {
    const player = playerRef.current;
    if (!player || !fallbackSrc) {
      return;
    }

    // whenever fallbackSrc changes, we want to allow fallback once again
    hasTriedFallbackRef.current = false;

    const handleError = () => {
      const err = player.error();

      // Only fallback for MEDIA_ERR_SRC_NOT_SUPPORTED
      if (!err || err.code !== 4) return;
      if (hasTriedFallbackRef.current) return;

      hasTriedFallbackRef.current = true;

      const fallbackProcessed = processVideoSource(fallbackSrc, type);

      // Clear the current error so the player can continue
      player.error(null);

      player.src({
        src: fallbackProcessed.src,
        type: fallbackProcessed.type,
      });
    };

    player.on('error', handleError);

    return () => {
      player.off('error', handleError);
    };
  }, [fallbackSrc, type]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    return () => {
      const player = playerRef.current;

      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className={'video-js'} style={{width: '100%', height: '100%'}} data-vjs-player data-testid="video-player">
      <div ref={videoRef}/>
    </div>
  );
};
