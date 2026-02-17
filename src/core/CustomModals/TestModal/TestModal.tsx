import React from 'react';

import { Modal } from '../../Modal/Modal';
import { ModalBody } from '../../Modal/ModalBody/ModalBody';
import { ModalFooter } from '../../Modal/ModalFooter/ModalFooter';
import { ModalHeader } from '../../Modal/Modalheader/ModalHeader';

interface Props {
  close: (value: any) => void;
}

export const TestModal = (props: Props) => {
  return (
    <Modal>
      <ModalHeader>
        <h3>Test Modal #1</h3>
      </ModalHeader>
      <ModalBody>
        <p>Body of modal #1</p>
      </ModalBody>
      <ModalFooter>
        <button onClick={props.close} className="btn btn-primary">
          Close Modal
        </button>
      </ModalFooter>
    </Modal>
  );
};
