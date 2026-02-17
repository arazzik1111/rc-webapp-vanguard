import { VideoPlayer, VideoPlayerProps } from "./VideoPlayer";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";
import { Text } from "@vanguard/Text/Text";
import { videoPlayerService } from "@vanguard/VideoPlayer/VideoPlayer.service";

export default SbDecorator({
  title: "vanguard/VideoPlayer",
  component: VideoPlayer,
  extra: {
    ...disableControls([""]),
  },
});

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: VideoPlayerProps = {
  opts: {
    src: "https://media.rankingcoach.com/tutorials/en/local_seo/usa_creation_google_account.mp4",
  },
};

export const VideoPlayerStory = (props: VideoPlayerProps) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div
      style={{
        width: 400,
        height: 300,
        border: "1px solid red",
      }}
    >
      <VideoPlayer {...propsMock}>ImplementME</VideoPlayer>
    </div>
  );
};

export const VideoPlayerWithService = (props: VideoPlayerProps) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <Text
        links={{
          link: {
            text: "",
            onClick: () => {
              videoPlayerService.open(
                "https://media.rankingcoach.com/tutorials/en/local_seo/usa_creation_google_account.mp4",
              );
            },
          },
        }}
      >
        Click <link>here</link>
      </Text>
    </div>
  );
};

export const VideoPlayerYouTube = (props: VideoPlayerProps) => {
  /**
   * YouTube video example
   * */
  const youtubeProps = mapStorybookActionToProps(props, {
    opts: {
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  });

  return (
    <div
      style={{
        width: 400,
        height: 300,
        border: "1px solid blue",
      }}
    >
      <VideoPlayer {...youtubeProps} />
    </div>
  );
};

export const VideoPlayerYouTubeEmbed = (props: VideoPlayerProps) => {
  /**
   * YouTube embed URL example
   * */
  const youtubeEmbedProps = mapStorybookActionToProps(props, {
    opts: {
      src: "https://www.youtube.com/embed/n42gwhKCpSs",
    },
  });

  return (
    <div
      style={{
        width: 400,
        height: 300,
        border: "1px solid green",
      }}
    >
      <VideoPlayer {...youtubeEmbedProps} />
    </div>
  );
};
