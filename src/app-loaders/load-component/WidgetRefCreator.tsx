import { PublicWidgetData } from '@stores/public-widgets-data.store';
import { MutableRefObject, ReactNode, useEffect, useState } from 'react';

import { useWidgetContext, WidgetContextType } from './widget-context';

interface Props {
  onRefReady: (ref: MutableRefObject<WidgetContextType>) => void;
  widgetData: WidgetContextType | null;
  children: ReactNode | undefined;
}

export const WidgetRefCreator = (props: Props) => {
  const { widgetData, onRefReady, children } = props;
  const ref = useWidgetContext(widgetData ?? { host: '', locationId: '', token: '', widgetId: '' });
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    onRefReady(ref);
    setShouldRender(true);
    PublicWidgetData.getInstance().set({
      host: '',
      locationId: '',
      token: '',
      widgetId: widgetData?.widgetId ?? '',
    });
  }, [ref]);

  if (!shouldRender) {
    return null;
  }
  return children;
};
