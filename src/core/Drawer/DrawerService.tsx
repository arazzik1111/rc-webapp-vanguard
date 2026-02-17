import { uuidv4 } from '@helpers/generate-uid';
import { PUB_SUB_EVENTS, pubSubService } from '@helpers/pub-sub';
import { MultiSelectDrawer, MultiSelectDrawerProps } from '@vanguard/CustomDrawers/MultiSelectDrawer/MultiSelectDrawer';
import { TextEditDrawer, TextEditDrawerProps } from '@vanguard/CustomDrawers/TextEditDrawer/TextEditDrawer';
import React, { ReactNode } from 'react';

import { DrawerProps } from './Drawer';

export type BaseDrawerProps = { onClose?: () => void };
type TextEditDrawerOptions = Omit<TextEditDrawerProps, 'onClose'>;
type MultiSelectDrawerOptions = Omit<MultiSelectDrawerProps, 'onClose'>;

class DrawerServiceClass {
  private drawerId: string | null = null;
  openTextEditDrawer(textEditDrawerOptions: TextEditDrawerOptions, drawerOptions?: DrawerProps) {
    const id = this.open(
      <TextEditDrawer
        {...textEditDrawerOptions}
        onClose={() => {
          this.close(id);
        }}
      />,
      drawerOptions,
    );
  }

  openMultiSelectDrawer(multiSelectDrawerOptions: MultiSelectDrawerOptions, drawerOptions?: DrawerProps) {
    const id = this.open(
      <MultiSelectDrawer
        {...multiSelectDrawerOptions}
        onClose={() => {
          this.close(id);
        }}
      />,
      drawerOptions,
    );
  }

  open(component: ReactNode, options?: DrawerProps) {
    const id = uuidv4();

    // If component is a React element, clone it and add closeDrawer prop
    const enhancedComponent = React.isValidElement(component)
      ? React.cloneElement(component, {
          // Type assertion to allow adding onClose property
          ...(component.props as object),
          onClose: () => this.close(id),
        } as React.ComponentProps<any>)
      : component;

    pubSubService.$pub(PUB_SUB_EVENTS.reactDrawerOpen, {
      component: enhancedComponent,
      options,
      id,
    });

    this.drawerId = id;

    return id;
  }

  close(drawerId: string) {
    pubSubService.$pub(PUB_SUB_EVENTS.reactDrawerClose, {
      id: drawerId,
    });
  }

  closeLast() {
    if (!this.drawerId) {
      return;
    }

    this.close(this.drawerId);
    this.drawerId = null;
  }
}

export const DrawerService = new DrawerServiceClass();
