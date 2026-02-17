import { ExportXLS } from "./ExportXLS";
import { Story } from "./stories/_ExportXLS.default";
import { Default as _Default } from "./stories/Default.story";
import { WithCustomFileName as _WithCustomFileName } from "./stories/WithCustomFileName.story";
import { WithCustomButtonText as _WithCustomButtonText } from "./stories/WithCustomButtonText.story";

export const Default: Story = { ..._Default };
export const WithCustomFileName: Story = { ..._WithCustomFileName };
export const WithCustomButtonText: Story = { ..._WithCustomButtonText };

export default {
  title: "vanguard/ExportXLS",
  component: ExportXLS,
};
