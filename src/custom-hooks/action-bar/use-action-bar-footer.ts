import { actionBarService } from '@vanguard/ActionBar/ActionBar.service';
import { ActionBarFooterProps } from '@vanguard/ActionBar/ActionBarTemplates/ActionBarFooter/ActionBarFooter';
import { useEffect } from 'react';

/**
 * @important This is an EXAMPLE of implementation. Please adapt to needs when needed
 */
export const useActionBarFooter = (props: ActionBarFooterProps) => {
  return useEffect(() => {
    actionBarService.setFooter(props);
  }, []);
};
