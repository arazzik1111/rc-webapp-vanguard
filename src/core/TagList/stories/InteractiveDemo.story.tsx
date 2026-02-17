import React from "react";
import { within, expect } from "storybook/test";
import { Story } from "./_TagList.default";
import { TagProps } from "../Tag/Tag";
import { TagList } from "../TagList";

export const InteractiveDemo: Story = {
  render: () => {
    const [tags, setTags] = React.useState<TagProps[]>([
      { id: 1, text: "React", hasDeleteBtn: true },
      { id: 2, text: "TypeScript", hasDeleteBtn: true },
      { id: 3, text: "Storybook", hasDeleteBtn: true },
      { id: 4, text: "Testing", hasDeleteBtn: true },
    ]);

    const handleDelete = (id: number | string | undefined) => {
      setTags(tags.filter(tag => tag.id !== id));
    };

    const tagsWithCallback = tags.map(tag => ({
      ...tag,
      deleteBtnCallback: handleDelete,
    }));

    return (
      <div style={{ padding: "20px" }}>
        <h3>Interactive Tag List (Click X to delete)</h3>
        <TagList tags={tagsWithCallback} />
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f5f5f5" }}>
          <strong>Remaining tags:</strong> {tags.length}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const reactTag = canvas.getByText("React");
    const typescriptTag = canvas.getByText("TypeScript");

    await expect(reactTag).toBeInTheDocument();
    await expect(typescriptTag).toBeInTheDocument();

    const remainingDiv = canvasElement.querySelector('div[style*="background-color: rgb(245, 245, 245)"]');
    await expect(remainingDiv).toBeInTheDocument();
    await expect(remainingDiv?.textContent?.trim()).toContain("Remaining tags: 4");
  },
};