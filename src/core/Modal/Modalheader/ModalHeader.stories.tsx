import React from "react";
import { disableControls, SbDecorator } from "@test-utils/get-storybook-decorator";
import { ModalHeader, ModalHeaderProps } from "@vanguard/Modal/Modalheader/ModalHeader";
import { Text, TextTypes } from "@vanguard/Text/Text";
import { Modal } from "@vanguard/Modal/Modal";
import { classNames } from "@helpers/classNames";
import { dFlex, justifyContentCenter, w100 } from "@globalStyles";

export default SbDecorator({
  title: "Vanguard/Modal/ModalHeader",
  component: ModalHeader,
  extra: {
    argTypes: {
      ...disableControls(["type", "closeFn", "className"]),
      title: {
        name: "title",
        type: { name: "string", required: false },
        defaultValue: "Title",
      },
      dismiss: {
        name: "dismiss",
        type: { name: "boolean", required: false },
        defaultValue: true,
      },
    },
  },
});

const ModalStory = (props: ModalHeaderProps & { title?: string; dismiss?: boolean }) => {
  return (
    <Modal>
      <ModalHeader {...props} closeFn={props.dismiss ? () => {} : undefined} type={props.type}>
        <div className={classNames(dFlex, justifyContentCenter, w100)}>
          <Text textAlign={"center"} type={TextTypes.heading4}>
            {props.title}
          </Text>
        </div>
      </ModalHeader>
    </Modal>
  );
};

export const ModalHeaderDefault = (props: ModalHeaderProps) => {
  props.type = "default";
  return <ModalStory {...props} />;
};
export const ModalHeaderInfo = (props: ModalHeaderProps) => {
  props.type = "info";
  return <ModalStory {...props} />;
};
export const ModalHeaderDanger = (props: ModalHeaderProps) => {
  props.type = "danger";
  return <ModalStory {...props} />;
};

export const ModalHeaderWarn = (props: ModalHeaderProps) => {
  props.type = "warn";
  return <ModalStory {...props} />;
};

export const ModalHeaderSuccess = (props: ModalHeaderProps) => {
  props.type = "success";
  return <ModalStory {...props} />;
};
