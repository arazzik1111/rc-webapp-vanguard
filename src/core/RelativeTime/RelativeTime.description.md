## RelativeTime Component

A React component that displays a given date/time in a human-readable relative time format (e.g., "2 minutes ago", "in 3 days"). It wraps the Vanguard Text component and uses the `useRelativeTimeFormat` hook internally for proper internationalization and translation support.

### Usage

Import and use the component with a Date object or ISO string:

```tsx
import { RelativeTime } from '@vanguard/RelativeTime/RelativeTime';

function MyComponent() {
  const pastDate = new Date('2023-12-01T10:00:00Z');
  const futureDate = '2024-12-25T00:00:00Z';

  return (
    <div>
      <RelativeTime>{pastDate}</RelativeTime>
      <RelativeTime type={TextTypes.textHelp}>{futureDate}</RelativeTime>
    </div>
  );
}
```

### Props

Extends all `TextProps` except `children` and `replacements`:

- `children: Date | string` - The date/time to format. Can be a Date object or an ISO date/time string.
- `fallbackText?: string` - Text to render when the provided date is invalid. Defaults to "Invalid date".

All other Text component props are supported (e.g., `type`, `className`, etc.).

### Examples

- **Past dates**: `<RelativeTime>{new Date('2023-12-01')}</RelativeTime>` → "2 months ago"
- **Future dates**: `<RelativeTime>{'2024-12-25T00:00:00Z'}</RelativeTime>` → "in 3 days"
- **With Text props**: `<RelativeTime type={TextTypes.textHelp}>{date}</RelativeTime>`

### Supported Time Ranges

- Seconds: "a few seconds ago"
- Minutes: "a minute ago" / "5 minutes ago"
- Hours: "an hour ago" / "3 hours ago"
- Days: "a day ago" / "7 days ago"
- Weeks: "a week ago" / "2 weeks ago"
- Months: "a month ago" / "6 months ago"
- Years: "a year ago" / "2 years ago"

The component automatically determines whether the date is in the past or future and formats accordingly. It handles all translation and formatting through the underlying Text component.

Note: Months are calculated using a fixed 30-day approximation (30 days = 1 month). The `useRelativeTimeFormat` hook and `RelativeTime` component return human-friendly, approximate relative times rather than exact calendar month differences — use a dedicated date library (for example, date-fns or Luxon) if you need precise month calculations.
