# Icon Component

The Icon component provides a flexible way to display SVG icons with various customization options.

## Usage

```tsx
import { Icon } from '@vanguard/Icon/Icon';
import { IconNames } from '@vanguard/Icon/IconNames';

<Icon children={IconNames.check} />
```

## Props

- `children`: The icon name from IconNames enum (required)
- `type`: Icon size - 'small' or 'large' (default: 'small')
- `color`: Icon color (default: 'var(--n900)')
- `hoverColor`: Color on hover
- `fillColor`: Background fill color when hasCircle is true
- `hasCircle`: Wraps icon in a circular background
- `circleSize`: Size of the circle
- `spin`: Adds spinning animation
- `className`: Additional CSS class
- `svgClassName`: CSS class for the SVG element
- `style`: Inline styles
- `onClick`: Click handler
- `testId`: Test identifier
- `forceSize`: Force specific width/height
- `fillOpacity`: Opacity for fill color
- `onMouseEnter/onMouseLeave`: Mouse event handlers
- `role`: ARIA role

## Examples

### Basic Icon
```tsx
<Icon children={IconNames.check} />
```

### Large Icon
```tsx
<Icon children={IconNames.check} type={IconSize.large} />
```

### Colored Icon
```tsx
<Icon children={IconNames.check} color="#007bff" />
```

### Icon with Circle
```tsx
<Icon children={IconNames.check} hasCircle fillColor="#28a745" color="#ffffff" />
```

### Spinning Icon
```tsx
<Icon children={IconNames.refresh} spin />
```

## Available Icons

The component supports all icons defined in the IconNames enum. Icons are dynamically loaded from the asset library.