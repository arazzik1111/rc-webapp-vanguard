import React from 'react';

import { Modal } from '../../Modal/Modal';
import { ModalBody } from '../../Modal/ModalBody/ModalBody';
import { ModalFooter } from '../../Modal/ModalFooter/ModalFooter';
import { ModalHeader } from '../../Modal/Modalheader/ModalHeader';

interface Props {
  close: (value: any) => void;
  item: any;
}

export const ImplementDetailsModal = (props: Props) => {
  const { item } = props;
  return (
    <Modal>
      <ModalHeader>
        <h3>Info on what we need to implement</h3>
      </ModalHeader>
      <ModalBody>
        <pre>{item ? JSON.stringify(item, null, 2) : 'No data'}</pre>
      </ModalBody>
      <ModalFooter>
        <button onClick={props.close} className="btn btn-primary">
          Close Modal
        </button>
      </ModalFooter>
    </Modal>
  );
};
