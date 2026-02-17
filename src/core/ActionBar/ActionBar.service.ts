import { PUB_SUB_EVENTS, pubSubService } from '@helpers/pub-sub';
import { ActionBarFooterProps } from '@vanguard/ActionBar/ActionBarTemplates/ActionBarFooter/ActionBarFooter';
import { ActionBarMessageProps } from '@vanguard/ActionBar/ActionBarTemplates/ActionBarMessage/ActionBarMessage';

export type ActionBarOptions = {
  priority?: number;
  id?: string;
};

class ActionBarService {
  setFooter(actionBarProps: ActionBarFooterProps) {
    pubSubService.$pub(PUB_SUB_EVENTS.reactActionBarSetFooter, {
      actionBarProps: actionBarProps,
    });
  }

  hideFooter() {
    pubSubService.$pub(PUB_SUB_EVENTS.reactActionBarHideFooter);
  }

  addMessage(actionBarProps: ActionBarMessageProps, options: ActionBarOptions = {}) {
    if (options.id === undefined) {
      options.id = `ACTION_BAR_${Date.now()}${Math.random()}`;
    }

    if (options.priority === undefined) {
      if (actionBarProps.type === 'error') {
        options.priority = 0;
      } else if (actionBarProps.type === 'warning') {
        options.priority = 10;
      } else if (actionBarProps.type === 'success') {
        options.priority = 20;
      } else if (actionBarProps.type === 'info') {
        options.priority = 30;
      }
    }

    pubSubService.$pub(PUB_SUB_EVENTS.reactActionBarAddMessage, {
      id: options.id,
      priority: options.priority,
      props: actionBarProps,
    });

    return options;
  }

  removeMessage(id: string) {
    pubSubService.$pub(PUB_SUB_EVENTS.reactActionBarRemoveMessage, { id: id });
  }
}

export const actionBarService = new ActionBarService();
