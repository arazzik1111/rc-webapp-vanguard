import { SbDecorator } from "@test-utils/get-storybook-decorator";
import { Header } from "./Header";

// Import shared Story type
import { Story } from "./stories/_Header.default";

// Import all individual stories
import { PageHeader as _PageHeader } from "./stories/PageHeader.story";
import { DrawerHeader as _DrawerHeader } from "./stories/DrawerHeader.story";
import { CompactDrawerHeader as _CompactDrawerHeader } from "./stories/CompactDrawerHeader.story";
import { BamHeader as _BamHeader } from "./stories/BamHeader.story";
import { BamWithPreviewHeader as _BamWithPreviewHeader } from "./stories/BamWithPreviewHeader.story";
import { WithoutDescription as _WithoutDescription } from "./stories/WithoutDescription.story";
import { WithCustomClassName as _WithCustomClassName } from "./stories/WithCustomClassName.story";
import { EmptyDescription as _EmptyDescription } from "./stories/EmptyDescription.story";
import { LongTitleAndDescription as _LongTitleAndDescription } from "./stories/LongTitleAndDescription.story";
import { AllContextsComparison as _AllContextsComparison } from "./stories/AllContextsComparison.story";
import { SectionHeader as _SectionHeader } from "./stories/SectionHeader.story";
import { CompactSectionHeader as _CompactSectionHeader } from "./stories/CompactSectionHeader.story";

// Re-export each story with the shared Story type
export const PageHeader: Story = _PageHeader;
export const DrawerHeader: Story = _DrawerHeader;
export const CompactDrawerHeader: Story = _CompactDrawerHeader;
export const BamHeader: Story = _BamHeader;
export const BamWithPreviewHeader: Story = _BamWithPreviewHeader;
export const SectionHeader: Story = _SectionHeader
export const CompactSectionHeader: Story = _CompactSectionHeader
export const WithoutDescription: Story = _WithoutDescription;
export const WithCustomClassName: Story = _WithCustomClassName;
export const EmptyDescription: Story = _EmptyDescription;
export const LongTitleAndDescription: Story = _LongTitleAndDescription;
export const AllContextsComparison: Story = _AllContextsComparison;

export default {
  ...SbDecorator({
    title: "Vanguard/Header",
    component: Header,
  }),
};

