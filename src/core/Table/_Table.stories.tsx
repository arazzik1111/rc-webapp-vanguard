import { SbDecorator } from '@test-utils/get-storybook-decorator';
import { Table } from './Table';
import { Story } from './stories/_Table.default';
import { Default as _Default } from './stories/Default.story';
import { WithPagination as _WithPagination } from './stories/WithPagination.story';
import { Loading as _Loading } from './stories/Loading.story';
import { WithGreyBody as _WithGreyBody } from './stories/WithGreyBody.story';
import { WithBlurredRows as _WithBlurredRows } from './stories/WithBlurredRows.story';
import { WithHiddenBlurredRows as _WithHiddenBlurredRows } from './stories/WithHiddenBlurredRows.story';
import { WithoutFooter as _WithoutFooter } from './stories/WithoutFooter.story';
import { WithPrefixAndPostfix as _WithPrefixAndPostfix } from './stories/WithPrefixAndPostfix.story';
import { WithShowMoreLess as _WithShowMoreLess } from './stories/WithShowMoreLess.story';
import { WithStickyShadow as _WithStickyShadow } from './stories/WithStickyShadow.story';
import {WithSticky as _WithSticky} from "@vanguard/Table/stories/WithSticky.story.tsx";

export const Default: Story = { ..._Default };
export const WithPagination: Story = { ..._WithPagination };
export const Loading: Story = { ..._Loading };
export const WithGreyBody: Story = { ..._WithGreyBody };
export const WithBlurredRows: Story = { ..._WithBlurredRows };
export const WithHiddenBlurredRows: Story = { ..._WithHiddenBlurredRows };
export const WithoutFooter: Story = { ..._WithoutFooter };
export const WithPrefixAndPostfix: Story = { ..._WithPrefixAndPostfix };
export const WithShowMoreLess: Story = { ..._WithShowMoreLess };
export const WithStickyShadow: Story = { ..._WithStickyShadow };
export const WithSticky: Story = { ..._WithSticky };

export default {
  ...SbDecorator({
    title: 'Vanguard/Table',
    component: Table,
    extra: {
      argTypes: {
        isLoading: {
          defaultValue: false,
        },
        hasGreyBody: {
          defaultValue: false,
        },
      },
    },
  }),
};