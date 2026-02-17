# Storybook Organization Rules

## Story File Structure
✅ **MANDATORY**:USE vitest for testing NOT JEST!!!.

✅ **MANDATORY**: All component stories MUST follow this organization pattern:

### 1. Main Stories File
- File: `_ComponentName.stories.tsx`
- Purpose: Configuration and re-exports only
- Contains:
  - Storybook configuration (title, component, decorators)
  - Import the Story type from the default file
  - Imports all individual stories from the stories folder, then exports them using the following pattern:
    ```typescript
    import { Story } from "./stories/_ComponentName.default";
    import { StoryName as _StoryName } from "./stories/StoryName.story";
    export const StoryName: Story = { ..._StoryName };
    ```
  - **All imports must come first, followed by all exports.**
  - This pattern is required for Vitest/Storybook single-file test compatibility.

### 2. Stories Folder Structure
```
ComponentName/
├── _ComponentName.stories.tsx (main file)
├── stories/
│   ├── _ComponentName.default.ts (shared types & utilities)
│   ├── StoryName1.story.tsx
│   ├── StoryName2.story.tsx
│   └── ...
```

### 3. Default Types File
- File: `stories/_ComponentName.default.ts`
- Purpose: Shared types, utilities, and constants
- MUST export:
  ```typescript
  export type Story = StoryObj<typeof ComponentName>;
  ```
- MAY export:
  - Common mock functions
  - Test utilities (e.g., `waitForDebounce`)
  - Test data constants (e.g., `testColors`, `testData`)
  - Common selectors (e.g., `selectors`)

### 4. Individual Story Files
- File: `stories/StoryName.story.tsx`
- MUST import from `_ComponentName.default.ts`:
  ```typescript
  import { Story, testColors, selectors } from "./_ComponentName.default";
  ```
- MUST NOT redeclare the Story type
- SHOULD use shared utilities and constants
- When defining stories, use args whenever possible instead of render. Only use render if the story cannot be expressed with args alone.

## Example Implementation

### Main Stories File (`_ColorPicker.stories.tsx`)
```typescript
import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { colorPickerStore } from "./stories/bootstrap/colorpicker.test.slice";
import { ColorPicker } from "@vanguard/ColorPicker/ColorPicker.tsx";
import { Story } from "./stories/_ColorPicker.default";
import { Default as _Default } from "./stories/Default.story";
import { WithCallback as _WithCallback } from "./stories/WithCallback.story";
// ... other imports

export const Default: Story = { ..._Default };
export const WithCallback: Story = { ..._WithCallback };
// ... other exports

export default {
  ...SbDecorator({
    title: "Vanguard/ColorPicker",
    component: ColorPicker,
    opts: {
      customStore: colorPickerStore,
    },
  }),
};
```

### Default Types File (`stories/_ColorPicker.default.ts`)
```typescript
import { StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { ColorPicker } from "../ColorPicker";

export type Story = StoryObj<typeof ColorPicker>;

export const createMockColorChange = () => fn();

export const waitForDebounce = (ms: number = 100) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const testColors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
} as const;

export const selectors = {
  colorInput: 'input[type="color"]',
  textInput: 'input[type="text"]',
} as const;
```

### Individual Story File (`stories/Default.story.tsx`)
```typescript
import React from "react";
import { ColorPicker } from "../ColorPicker";
import { within, expect } from "storybook/test";
import { Story, testColors, selectors } from "./_ColorPicker.default";

export const Default: Story = {
  // ...story definition...
};
```

## Main Storybook File Pattern (MANDATORY)

All main storybook files MUST use the following import/export pattern for each story:

```typescript
import { Story } from "./stories/_ComponentName.default";
import { StoryName as _StoryName } from "./stories/StoryName.story";
export const StoryName: Story = { ..._StoryName };
```
- Always import the Story type from the default file
- Always import each story with an underscore alias (as _StoryName)
- Always export with explicit Story type and object spread
- This ensures type safety, clarity, and consistency for all agents

## Benefits

✅ **Modularity**: Each story is in its own file
✅ **Reusability**: Shared types and utilities prevent duplication
✅ **Maintainability**: Easy to find and modify individual stories
✅ **Consistency**: Standardized structure across all components
✅ **Type Safety**: Centralized type definitions
✅ **Clean Separation**: Main file focuses on configuration, stories focus on behavior

## Migration Guide

When refactoring existing stories:

1. Create `stories/` folder in component directory
2. Create `_ComponentName.default.ts` with shared types
3. Split large stories file into individual story files
4. Update main stories file to import all stories first, then export them as shown above
5. Update individual stories to use shared types and utilities

⛔️ **DO NOT**:
- Redeclare Story type in individual story files
- Duplicate test utilities across story files
- Put story logic in the main stories file
- Use hardcoded values when shared constants are available