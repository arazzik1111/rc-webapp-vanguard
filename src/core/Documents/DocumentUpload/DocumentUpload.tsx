import { Collapse } from '@mui/material';
import { translationService } from '@services/translation.service';
import { Button, ButtonSizes, ButtonTypes } from '@vanguard/Button/Button';
import { ComponentContainer } from '@vanguard/ComponentContainer/ComponentContainer';
import { Icon, IconSize } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';
import { Render } from '@vanguard/Render/Render';
import { snackbarService } from '@vanguard/SnackbarRoot/SnackBarService';
import { FontWeights, Text, TextTypes } from '@vanguard/Text/Text';
import Compressor from 'compressorjs';
import React, { useRef, useState } from 'react';

import {
  CONTENT_TYPE_IMAGE_JPEG,
  CONTENT_TYPE_IMAGE_JPG,
  CONTENT_TYPE_IMAGE_PNG,
  CONTENY_TYPE_APPLICATION_PDF,
  DocumentDataType,
  DocumentFileMimeType,
} from '../Document.types';
import { DocumentDisplay } from '../DocumentDisplay/DocumentDisplay';
import styles from './DocumentUpload.module.scss';

export type DocumentUploadProps = {
  onDocumentSelected: (document: DocumentDataType) => void;
  onDocumentRemoved: () => void;
  width?: string;
  height?: string;
  testId?: string;
  documentName?: string;
};

const acceptedFileMimeTypes: DocumentFileMimeType[] = [
  CONTENY_TYPE_APPLICATION_PDF,
  CONTENT_TYPE_IMAGE_PNG,
  CONTENT_TYPE_IMAGE_JPG,
  CONTENT_TYPE_IMAGE_JPEG,
];
export const DocumentUpload = (props: DocumentUploadProps) => {
  const {
    testId = 'DocumentUpload',
    onDocumentSelected,
    onDocumentRemoved,
    width = '192px',
    height = '154px',
    documentName,
  } = props;

  const [document, setDocument] = useState<DocumentDataType | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);
  const text = documentName
    ? translationService.get('Upload %documentName%', { documentName: documentName }).value
    : 'Upload document';

  const handleInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const doc: DocumentDataType = {
          srcIsBase64: true,
          fileSrc: e.target?.result as string,
          fileName: file.name,
          fileMimeType: file.type as DocumentFileMimeType,
          documentName: documentName,
        };
        setDocument(doc);
        onDocumentSelected(doc);
      };

      /**
       * PDF
       */
      if (file.type == 'application/pdf') {
        if (file.size > 5242880) {
          console.error('DocumentUpload: PDF size is too big: ', file.size, file);
          snackbarService.openErrorSnackbar('File size must be between 10kb and 5MB.');
          return;
        }

        reader.readAsDataURL(file);
        return;
      }

      // Images must be compressed
      new Compressor(file, {
        maxWidth: 3000,
        maxHeight: 3000,
        quality: 0.8,
        convertSize: 5242880,
        success: (compressedResult) => {
          if (compressedResult.size > 5242880) {
            console.error('DocumentUpload: Image size is too big: ', compressedResult.size, compressedResult);
            snackbarService.openErrorSnackbar('File size must be between 10kb and 5MB.');
            return;
          }
          reader.readAsDataURL(compressedResult);
        },
      });
    }
  };

  const handleRemove = () => {
    setDocument(undefined);
    onDocumentRemoved();

    // Reset the input
    if (inputRef.current) {
      inputRef.current.value = '';
    } else {
      console.error('UploadDocument: input not found');
    }
  };

  const handleChange = () => {
    if (inputRef.current) {
      inputRef.current.click();
    } else {
      console.error('UploadDocument: input not found');
    }
  };

  /**
   * Return View
   * ---
   */
  return (
    <ComponentContainer testId={testId} className={styles.container}>
      <Text type={TextTypes.textHelp} fontWeight={FontWeights.medium}>
        {documentName}
      </Text>

      <Collapse in={!!document?.fileSrc}>
        <UploadDocumentEditGroup onRemove={handleRemove} onChange={handleChange} />
      </Collapse>

      <Render if={!document?.fileSrc || !document?.fileMimeType}>
        <div style={{ width: width, height: height }}>
          <UploadDocumentButton text={text} onClick={handleChange} />
        </div>
      </Render>

      <Render if={!!document?.fileSrc && !!document?.fileMimeType}>
        <DocumentDisplay
          fileName={document?.fileName ?? 'file'}
          fileSrc={document?.fileSrc ?? ''}
          fileMimeType={document?.fileMimeType as DocumentFileMimeType}
          width={width}
          height={height}
          showDownload={false}
        />
      </Render>

      <input
        ref={inputRef}
        id={'uploadInput'}
        type={'file'}
        accept={acceptedFileMimeTypes.join(',')}
        style={{ display: 'none' }}
        onChange={handleInputFileChange}
      />
    </ComponentContainer>
  );
};

const UploadDocumentButton = (props: { onClick: () => void; text: string }) => {
  return (
    <ComponentContainer testId={'UploadDocumentPlaceholder'} onClick={props.onClick} className={styles.button}>
      <Icon type={IconSize.large} hasCircle={true} color={'--n000'} fillColor={'--p500'} circleSize={40}>
        {IconNames.add}
      </Icon>
      <Text fontWeight={FontWeights.bold} color={'--p500'}>
        {props.text}
      </Text>
    </ComponentContainer>
  );
};

const UploadDocumentEditGroup = (props: { onRemove: () => void; onChange: () => void }) => {
  return (
    <ComponentContainer testId={'UploadDocumentEditGroup'} className={styles.editGroup}>
      <Button onClick={props.onRemove} type={ButtonTypes.secondary} size={ButtonSizes.small}>
        {'Remove'}
      </Button>
      <Button onClick={props.onChange} type={ButtonTypes.secondary} size={ButtonSizes.small}>
        {'Change'}
      </Button>
    </ComponentContainer>
  );
};
