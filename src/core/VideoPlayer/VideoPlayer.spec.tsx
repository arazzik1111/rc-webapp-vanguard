import { render } from '@test-utils/test-utils';
import React from 'react';

import { VideoPlayer } from './VideoPlayer';

describe('VideoPlayer component tests', () => {
  test('should render', async () => {
    render(
      <VideoPlayer
        opts={{
          src: 'https://media.rankingcoach.com/tutorials/en/local_seo/usa_creation_google_account.mp4',
        }}
      />,
    );
  });
});
