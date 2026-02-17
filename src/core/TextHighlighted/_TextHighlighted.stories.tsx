import { TextHighlighted, TextHighlightedProps } from "./TextHighlighted";
import React, { useState } from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { mapStorybookActionToProps } from "@test-utils/map-storybook-action-to-props";

export default {
  ...SbDecorator({
    title: "vanguard/TextHighlighted",
    component: TextHighlighted,
    extra: {
      ...disableControls([""]),
    },
  }),
};

/**
 * Default props of all the stories
 * If the storybook user did not add anything this will be chosen
 * */
const defaultProps: TextHighlightedProps = {
  children: undefined,
};

export const TextHighlightedStory = (props: TextHighlightedProps) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <TextHighlighted
        highlightWords={["con", "ct"]}
        translate={false}
        highlightColor={"rgba(var(--w400-rgb),0.4)"}
        {...propsMock}
      >
        contact@grenierbrasserie.com
      </TextHighlighted>
    </div>
  );
};

export const TextHighlightedStory2 = (props: TextHighlightedProps) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <TextHighlighted
        highlightWords={["office"]}
        translate={false}
        highlightColor={"rgba(var(--e400-rgb),0.4)"}
        {...propsMock}
      >
        office@grenierbrasserie.com
      </TextHighlighted>
    </div>
  );
};

export const TextHighlightedWithEmphasisStory = (props: TextHighlightedProps) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <TextHighlighted
        highlightWords={["off", "e@"]}
        translate={false}
        highlightColor={"rgba(var(--e400-rgb),0.4)"}
        {...propsMock}
      >
        office@<b>grenier</b>bra<em>ss</em>erie.com
      </TextHighlighted>

      <TextHighlighted
        highlightWords={["con", "ct"]}
        translate={false}
        highlightColor={"rgba(var(--w400-rgb),0.4)"}
        {...propsMock}
      >
        contact@<span>grenier</span>brasserie.com
      </TextHighlighted>
    </div>
  );
};

export const TextHighlightedWithXSSAttackStory = (props: TextHighlightedProps) => {
  /**
   * Here we can add story specific props
   * */
  const propsMock = mapStorybookActionToProps(props, {
    ...defaultProps,
  });

  return (
    <div>
      <TextHighlighted
        highlightWords={["con", "ct"]}
        translate={true}
        highlightColor={"rgba(var(--w400-rgb),0.4)"}
        {...propsMock}
      >
        {"><img/src/onerror=confirm(`XSS`)>"}
      </TextHighlighted>
    </div>
  );
};
