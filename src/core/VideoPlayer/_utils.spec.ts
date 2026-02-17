import { describe, expect, it } from 'vitest';

import { extractYouTubeId, isYouTubeUrl, processVideoSource } from './utils';

describe('VideoPlayer utils', () => {
  describe('extractYouTubeId', () => {
    it('should extract YouTube ID from watch URL', () => {
      const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      expect(extractYouTubeId(url)).toBe('dQw4w9WgXcQ');
    });

    it('should extract YouTube ID from embed URL', () => {
      const url = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
      expect(extractYouTubeId(url)).toBe('dQw4w9WgXcQ');
    });

    it('should extract YouTube ID from youtu.be URL', () => {
      const url = 'https://youtu.be/dQw4w9WgXcQ';
      expect(extractYouTubeId(url)).toBe('dQw4w9WgXcQ');
    });

    it('should extract YouTube ID from watch URL with additional parameters', () => {
      const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=123s';
      expect(extractYouTubeId(url)).toBe('dQw4w9WgXcQ');
    });

    it('should return null for non-YouTube URLs', () => {
      const url = 'https://example.com/video.mp4';
      expect(extractYouTubeId(url)).toBeNull();
    });
  });

  describe('isYouTubeUrl', () => {
    it('should return true for YouTube URLs', () => {
      expect(isYouTubeUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe(true);
      expect(isYouTubeUrl('https://youtu.be/dQw4w9WgXcQ')).toBe(true);
    });

    it('should return false for non-YouTube URLs', () => {
      expect(isYouTubeUrl('https://example.com/video.mp4')).toBe(false);
    });
  });

  describe('processVideoSource', () => {
    it('should process YouTube URLs correctly', () => {
      const result = processVideoSource('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
      expect(result.isYouTube).toBe(true);
      expect(result.type).toBe('video/youtube');
      expect(result.youTubeId).toBe('dQw4w9WgXcQ');
    });

    it('should process regular video URLs correctly', () => {
      const result = processVideoSource('https://example.com/video.mp4', 'video/mp4');
      expect(result.isYouTube).toBe(false);
      expect(result.type).toBe('video/mp4');
      expect(result.youTubeId).toBeUndefined();
    });

    it('should default to video/mp4 for non-YouTube URLs without type', () => {
      const result = processVideoSource('https://example.com/video.mov');
      expect(result.isYouTube).toBe(false);
      expect(result.type).toBe('video/mp4');
    });
  });
});
