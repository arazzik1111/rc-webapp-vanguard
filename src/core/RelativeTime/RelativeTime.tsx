import { Text, TextProps } from '@vanguard/Text/Text';

import { useRelativeTimeFormat } from '../../custom-hooks/use-relative-time-format/use-relative-time-format';

export interface RelativeTimeProps extends Omit<TextProps, 'children' | 'replacements'> {
  children: Date | string;
  fallbackText?: string;
}

export const RelativeTime = (props: RelativeTimeProps) => {
  const { children: dateTime, fallbackText = 'Invalid date', ...textProps } = props;

  const dateTimeString = typeof dateTime === 'string' ? dateTime : dateTime.toISOString();
  const { text, replacements, error } = useRelativeTimeFormat(dateTimeString);

  if (error) {
    return <Text {...textProps}>{fallbackText}</Text>;
  }

  return (
    <Text {...textProps} replacements={replacements}>
      {text}
    </Text>
  );
};
