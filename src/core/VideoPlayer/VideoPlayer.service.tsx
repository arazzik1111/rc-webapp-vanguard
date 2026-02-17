import { ModalService } from '@vanguard/Modal/ModalService';
import { VideoPlayer } from '@vanguard/VideoPlayer/VideoPlayer';
import React from 'react';

class VideoPlayerService {
  open(src: string, fallbackSrc?: string) {
    ModalService.open(
      <div
        style={{
          height: '100%',
          width: '100%',
          maxWidth: 800,
          maxHeight: 700,
        }}
      >
        <VideoPlayer opts={{src: src, fallbackSrc: fallbackSrc}} />
      </div>,
      { wrapInModal: true },
    );
  }
}

export const videoPlayerService = new VideoPlayerService();
