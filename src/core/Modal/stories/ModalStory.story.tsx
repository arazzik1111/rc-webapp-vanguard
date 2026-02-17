import React from "react";
import { fn, userEvent, within, expect } from "storybook/test";
import { ModalService } from "@vanguard/Modal/ModalService";
import { Modal } from "@vanguard/Modal/Modal";
import { Button } from "@vanguard/Button/Button";
import { Story } from "./_Modal.default";

const ModalOne = () => {
  return (
    <Modal minHeight={"500px"} fullscreen={true}>
      TEST1
    </Modal>
  );
};

const ModalTwo = () => {
  return (
    <Modal minHeight={"500px"} fullscreen={true}>
      TEST2
    </Modal>
  );
};

export const ModalStory: Story = {
  args: {},
  render: (args) => (
    <div>
      <Button
        onClick={() => {
          const id1 = ModalService.openSlide(<ModalOne />);
          const id2 = ModalService.openSlide(<ModalTwo />);
          // ModalService.closeEv(id2);
        }}
      >
        Open Modals
      </Button>
    </div>
  ),
};