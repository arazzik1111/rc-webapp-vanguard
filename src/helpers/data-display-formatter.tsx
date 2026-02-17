import React from 'react';

import { currencyFormatter, dateFormatter } from './data-formatters';

//TODO: components not used - to be removed?
export function TimestampFormatter({ timestamp }: { timestamp: number }) {
  if (!timestamp) return <span />;
  return <>{dateFormatter.format(timestamp)}</>;
}

export function CurrencyFormatter({ value }: { value: number }) {
  if (!value) return <span />;

  return <>{currencyFormatter.format(value)}</>;
}
