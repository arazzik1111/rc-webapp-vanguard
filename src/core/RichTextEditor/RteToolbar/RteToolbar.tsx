import { useDynamicImport } from '@custom-hooks/use-dynamic-import/use-dynamic-import';
import { classNames } from '@helpers/classNames';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { DropdownMenu } from '@vanguard/DropdownMenu/DropdownMenu';
import { Icon } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';
import { useLexicalToolbar } from 'lexical-toolkit';
import React, { Dispatch, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './RteToolbar.module.scss';

type RteToolbarProps = {
  className?: string;
  toolbarPortalElem: HTMLElement | null;
  isLinkEditMode: boolean;
  setIsLinkEditMode: Dispatch<boolean>;
};

export const RteToolbar = (props: RteToolbarProps) => {
  const { toolbarPortalElem, className = '', setIsLinkEditMode } = props;

  const [editor] = useLexicalComposerContext();
  const actions = useLexicalToolbar({
    editor: editor,
  });

  const [formatOpen, setFormatOpen] = useState(false);
  const formatRef = useRef(null);

  // ICONS
  const { SvgIcon: SVG_link } = useDynamicImport('text-editor/link.svg');
  const { SvgIcon: SVG_unlink } = useDynamicImport('text-editor/unlink.svg');
  const { SvgIcon: SVG_numbered_list } = useDynamicImport('text-editor/numbered-list.svg');
  const { SvgIcon: SVG_bullet_list } = useDynamicImport('text-editor/bullet-list.svg');
  const { SvgIcon: SVG_font_size } = useDynamicImport('text-editor/font-size.svg');
  const { SvgIcon: SVG_clear } = useDynamicImport('text-editor/eraser.svg');

  /**
   * Return view
   * ---
   */
  return (
    <>
      {toolbarPortalElem &&
        createPortal(
          <div
            className={classNames(styles.container, className)}
            onMouseDown={(event) => {
              event.preventDefault();
            }}
          >
            <ToolbarItem
              disabled={!actions.bold.show}
              active={actions.bold.active}
              onClick={() => actions.bold.dispatch()}
            >
              <strong>B</strong>
            </ToolbarItem>

            <ToolbarItem
              disabled={!actions.italic.show}
              active={actions.italic.active}
              onClick={() => actions.italic.dispatch()}
            >
              <em>I</em>
            </ToolbarItem>

            <ToolbarItem
              disabled={!actions.underline.show}
              active={actions.underline.active}
              onClick={() => actions.underline.dispatch()}
            >
              <u>U</u>
            </ToolbarItem>

            <Divider />

            <div ref={formatRef}>
              <ToolbarItem
                disabled={!actions.blockFormatting.show}
                active={false}
                onClick={() => setFormatOpen(!formatOpen)}
              >
                <span className={styles.toggle}>
                  <span>
                    <img src={SVG_font_size} width={20} height={20} />
                  </span>
                  <span className={styles.toggleIcon}>
                    <Icon color={formatOpen ? '--n500' : '--n600'}>
                      {formatOpen ? IconNames.caretUp : IconNames.caretDown}
                    </Icon>
                  </span>
                </span>
              </ToolbarItem>
              <DropdownMenu
                anchorEl={formatRef}
                isOpen={formatOpen}
                toggleIsOpen={() => setFormatOpen(!formatOpen)}
                items={[
                  {
                    selected: actions.blockFormatting.value == 'paragraph',
                    title: 'Normal',
                    onClick: () => actions.blockFormatting.paragraph.dispatch(),
                  },
                  {
                    selected: actions.blockFormatting.value == 'h1',
                    title: 'Heading 1',
                    onClick: () => actions.blockFormatting.h1.dispatch(),
                  },
                  {
                    selected: actions.blockFormatting.value == 'h2',
                    title: 'Heading 2',
                    onClick: () => actions.blockFormatting.h2.dispatch(),
                  },
                  {
                    selected: actions.blockFormatting.value == 'h3',
                    title: 'Heading 3',
                    onClick: () => actions.blockFormatting.h3.dispatch(),
                  },
                ]}
              />
            </div>

            <Divider />

            <ToolbarItem
              disabled={!actions.link.show}
              active={false}
              onClick={() => {
                setIsLinkEditMode(true);
                actions.link.dispatch();
              }}
            >
              <img src={actions.link.active ? SVG_unlink : SVG_link} width={20} height={20} />
            </ToolbarItem>

            <Divider />

            <ToolbarItem
              disabled={!actions.blockFormatting.show}
              active={false}
              onClick={() => {
                actions.blockFormatting.numberList.dispatch();
              }}
            >
              <img src={SVG_numbered_list} width={20} height={20} />
            </ToolbarItem>

            <ToolbarItem
              disabled={!actions.blockFormatting.show}
              active={false}
              onClick={() => {
                actions.blockFormatting.bulletList.dispatch();
              }}
            >
              <img src={SVG_bullet_list} width={20} height={20} />
            </ToolbarItem>

            <Divider />

            <ToolbarItem
              disabled={false}
              active={false}
              onClick={() => {
                actions.clearFormatting.dispatch();
              }}
            >
              <img src={SVG_clear} width={16} height={16} />
            </ToolbarItem>
          </div>,
          toolbarPortalElem,
        )}
    </>
  );
};

const ToolbarItem = ({
  active,
  disabled,
  onClick,
  children,
}: {
  active: boolean;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={classNames(styles.button, active ? styles.active : undefined, disabled ? styles.disabled : undefined)}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClick && onClick();
      }}
    >
      {children}
    </div>
  );
};

const Divider = () => {
  return <div className={styles.divider} />;
};
