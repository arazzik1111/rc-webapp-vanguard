import './DateRangeModal.scss';

import React, { useState } from 'react';

import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';
import { DateRange, DateRangePickerResp, RcDateRangePickerProps } from '../../DateRange/DateRange';
import { Modal } from '../../Modal/Modal';
import { ModalBody } from '../../Modal/ModalBody/ModalBody';
import { ModalFooter } from '../../Modal/ModalFooter/ModalFooter';
import { StandardModalProps } from '../../Modal/ModalRoot/ModalRoot';

type Props = {} & StandardModalProps<DateRangePickerResp> & RcDateRangePickerProps;

export const DateRangeModal = (props: Props) => {
  const { close } = props;

  const [data, setData] = useState<DateRangePickerResp>({ selection: {} });

  const onDateRangeChange = (rangesByKey: DateRangePickerResp) => {
    setData(rangesByKey);
  };
  return (
    <ComponentContainer className={'DateRangeModal-container'}>
      <Modal {...props}>
        <ModalBody>
          <DateRange inputRanges={[]} showDateDisplay={false} {...props} onChange={onDateRangeChange} />
        </ModalBody>
        <ModalFooter
          positive={{
            cta: () => {
              close({
                isOk: true,
                data: data,
              });
            },
            text: 'Ok',
          }}
          negative={{
            cta: () => {
              close({
                isOk: false,
              });
            },
            text: 'Cancel',
          }}
        />
      </Modal>
    </ComponentContainer>
  );
};
