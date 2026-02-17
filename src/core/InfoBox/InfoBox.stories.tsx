import { InfoBox, InfoBoxProps, InfoBoxType } from "./InfoBox";
import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator.tsx";

export default SbDecorator({
  title: "Vanguard/InfoBox",
  component: InfoBox,
  extra: {
    argTypes: {
      ...disableControls([
        "testId",
        "dismissCallback",
        "className",
        "onFocus",
        "onBlur",
        "onKeyUp",
        "onKeyDown",
        "onInput",
        "onChange",
        "formconfig",
        "inputRef",
      ]),
      type: {
        defaultValue: "info",
      },
      title: {
        defaultValue: "Info box example",
      },
      description: {
        defaultValue:
          "Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.",
      },
      dismissible: {
        defaultValue: true,
      },
    },
  },
});

export const InfoBoxStory = (props: InfoBoxProps) => {
  return <InfoBox {...props} />;
};

export const InfoBoxDanger = (props: InfoBoxProps) => {
  const type = "danger";
  const title = "InfoBox Title";
  const description =
    "Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.";
  const maxWidth = "500px";
  const dismissible = true;

  return <InfoBox type={type} title={title} description={description} maxWidth={maxWidth} dismissible={dismissible} />;
};

export const InfoBoxWarn = (props: InfoBoxProps) => {
  const type = "warn";
  const title = "InfoBox Title";
  const description =
    "Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.";
  const maxWidth = "500px";
  const dismissible = true;

  return <InfoBox type={type} title={title} description={description} maxWidth={maxWidth} dismissible={dismissible} />;
};

export const InfoBoxSuccess = (props: InfoBoxProps) => {
  const type = "success";
  const title = "InfoBox Title";
  const description =
    "Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.";
  const maxWidth = "500px";
  const dismissible = true;

  return <InfoBox type={type} title={title} description={description} maxWidth={maxWidth} dismissible={dismissible} />;
};

export const InfoBoxInfo = (props: InfoBoxProps) => {
  const type = "info";
  const title = "InfoBox Title";
  const description =
    "Google My Business restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.";
  const maxWidth = "500px";
  const dismissible = true;

  return <InfoBox type={type} title={title} description={description} maxWidth={maxWidth} dismissible={dismissible} />;
};

export const InfoBoxInfoWithLinks = (props: InfoBoxProps) => {
  const type = "info";
  const title = "InfoBox Title";
  const description =
    "<link>Google My Business</link> restricts description editing for lodging locations (such as hotels). However, you can still edit and publish it in the other directories.";
  const maxWidth = "500px";
  const dismissible = true;

  return (
    <InfoBox
      links={{
        link: {
          text: "",
          onClick: () => {
            alert("click");
          },
        },
      }}
      type={type}
      title={title}
      description={description}
      maxWidth={maxWidth}
      dismissible={dismissible}
    />
  );
};

export const InfoBoxWithInlineLink = (props: InfoBoxProps) => {
  return (
    <InfoBox
      links={{
        link: {
          text: "",
          onClick: () => {
            alert("show");
          },
        },
      }}
      description={
        "To save your specific location, we require your address number. If you don't have one, <link>marking your address on the map!</link>."
      }
      type={"danger"}
    ></InfoBox>
  );
};
