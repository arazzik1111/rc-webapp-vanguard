import { PUB_SUB_EVENTS, pubSubService } from '@helpers/pub-sub';
import { ModalResponse } from '@vanguard/Modal/ModalResponse';
import React, { useEffect, useRef, useState } from 'react';

import { AllowedDrawerProps, Drawer } from '../Drawer';
import { DrawerCloseResponse } from '../Drawer.types';
import { DrawerService } from '../DrawerService';
import styles from './DrawerRoot.module.scss';

export interface DrawerRootProps {
  padding?: string | number;
}

export const DrawerRoot = (props: DrawerRootProps) => {
  const { padding = '40px 48px' } = props;

  const defaultDrawerProps: AllowedDrawerProps = {
    variant: 'temporary',
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [children, setChildren] = useState(null);
  const [drawerProps, setDrawerProps] = useState(defaultDrawerProps);
  const activeDrawerId = useRef(null);

  const handleDrawerClose = (e?: ModalResponse<DrawerCloseResponse>) => {
    activeDrawerId.current && DrawerService.close(activeDrawerId.current);
  };

  useEffect(() => {
    /**
     * Open Drawer
     */
    pubSubService.$sub(PUB_SUB_EVENTS.reactDrawerOpen, ({ component, options, id }) => {
      setChildren(component);
      setDrawerProps({
        ...defaultDrawerProps,
        ...options,
      });
      activeDrawerId.current = id;
      setIsDrawerOpen(true);
    });

    /**
     * Close Drawer
     */
    pubSubService.$sub(PUB_SUB_EVENTS.reactDrawerClose, ({ id }) => {
      if (id !== activeDrawerId.current) return;
      setIsDrawerOpen(false);
    });
  }, []);

  return (
    <div data-testid="drawer-root" id="drawer-root">
      <Drawer open={isDrawerOpen} {...drawerProps} onClose={handleDrawerClose}>
        <div className={styles.drawerRootContentWrapper} style={{ padding }}>
          {children}
        </div>
      </Drawer>
    </div>
  );
};
