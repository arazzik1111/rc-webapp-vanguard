export const formatTextWithAffixes = (content: string, prefix?: string, suffix?: string): { text: string } => {
  const text = `${prefix ?? ''}${content}${suffix ?? ''}`;
  return { text };
};
