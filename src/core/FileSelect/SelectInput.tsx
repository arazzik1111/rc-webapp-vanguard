import React, { ChangeEvent, useEffect, useRef } from 'react';

import { ModalService } from '../Modal/ModalService';

type Props = {
  isOpen: boolean;
  openCallback: () => void;
  accept?: string[];
  fileSelectCallback: (event: ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  showLoadingModalOnProcessing?: boolean;
};

// IMPORTANT! NOW WE HAVE MediaItemSelectInput COMPONENT. THIS COMPONENT IS NOT USED ANYMORE. PLEASE AVOID USING THIS COMPONENT.
export const SelectInput = (props: Props) => {
  const {
    isOpen,
    openCallback,
    fileSelectCallback,
    accept = [],
    multiple = false,
    showLoadingModalOnProcessing = false,
  } = props;

  const fileSelectRef = useRef<HTMLInputElement>(null);

  /**
   * Effect: Open File Select
   */
  useEffect(() => {
    if (isOpen && fileSelectRef.current) {
      fileSelectRef.current.value = '';
      fileSelectRef.current.click();
      openCallback();
    }
  }, [isOpen]);

  /**
   * Function: On File Input Change
   */
  const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
      return;
    }

    if (showLoadingModalOnProcessing) {
      // Show loading modal if needed
      ModalService.openLoadingModal();
    }

    fileSelectCallback(event);

    if (showLoadingModalOnProcessing) {
      // Close loading modal if it was shown
      ModalService.closeLoadingModal();
    }
  };

  /**
   * Render View
   */
  return (
    <input
      ref={fileSelectRef}
      type={'file'}
      accept={accept.join(',')}
      onChange={inputOnChange}
      style={{ display: 'none' }}
      multiple={multiple}
    />
  );
};
