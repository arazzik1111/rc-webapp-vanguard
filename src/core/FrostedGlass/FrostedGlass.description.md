## FrostedGlass Usage

The FrostedGlass component provides a frosted glass effect with a semi-transparent background and backdrop blur, commonly used for overlays, modals, and UI elements that need to appear layered over content.

### Basic Usage

```tsx
import { FrostedGlass } from '@vanguard/FrostedGlass';

function MyComponent() {
  return (
    <FrostedGlass>
      <div>Content with frosted glass background</div>
    </FrostedGlass>
  );
}
```

### API

The FrostedGlass component extends ComponentContainer, so it accepts all ComponentContainer props:

- `children`: ReactNode - The content to be wrapped with the frosted glass effect
- `className`: string - Additional CSS classes
- `style`: CSSProperties - Inline styles
- `onClick`: () => void - Click handler
- `testId`: string - Test identifier
- `id`: string - HTML id attribute
- `role`: string - ARIA role

### Styling

The frosted glass effect is achieved through:
- Semi-transparent white background: `rgba(var(--n000-rgb), 0.3)`
- Backdrop blur filter: `blur(16px)`

### Use Cases

- Modal overlays
- Dropdown menus
- Tooltip backgrounds
- Card overlays
- Navigation panels

### Example with Multiple Sections

To showcase the frosted glass effect, compare sections with and without the FrostedGlass component:

```tsx
<div style={{ position: 'relative', height: '400px', background: 'url(image.jpg)' }}>
  {/* Regular section */}
  <div style={{ padding: '20px', background: 'rgba(255,255,255,0.8)' }}>
    <h3>Regular Section</h3>
    <p>This section has a regular semi-transparent background.</p>
  </div>

  {/* Frosted glass section */}
  <FrostedGlass style={{ marginTop: '20px', padding: '20px' }}>
    <h3>Frosted Glass Section</h3>
    <p>This section has the frosted glass effect with backdrop blur.</p>
  </FrostedGlass>
</div>