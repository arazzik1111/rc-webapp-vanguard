## Modal Usage

To use modals in your application, you need to set up the ModalProvider and ModalRoot components:

### Basic Setup

Wrap your application root with `ModalProvider` and include `ModalRoot` in your component tree:

```tsx
import { ModalProvider, ModalRoot } from '@vanguard/Modal';

function App() {
  return (
    <ModalProvider>
      <div>
        {/* Your app content */}
        <ModalRoot />
      </div>
    </ModalProvider>
  );
}
```

### ModalProvider

The `ModalProvider` provides the context necessary for modal management. It must wrap any components that will open or interact with modals.

### ModalRoot

The `ModalRoot` component is responsible for rendering all active modals. It should be placed in your component tree where you want modals to appear (typically near the root level).

### Opening Modals

Modals are typically opened using the ModalService:

```tsx
import { ModalService } from '@vanguard/Modal';

// Open a modal
ModalService.openModal('my-modal-id', { /* modal props */ });