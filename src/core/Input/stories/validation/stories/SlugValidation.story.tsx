import React from "react";
import { userEvent, within, expect } from "storybook/test";
import { Story } from "./_Input.default";
import { ValidationTestWrapper, getTestElements, expectErrorToContain, expectErrorToNotExist, inputAndBlur, clearAndInputAndBlur } from "../../shared/test-helpers";
import { ErrorsKeys } from "@helpers/validators/valid-input/validate-input-errors";

const testSlugValidation = async (canvasElement: HTMLElement) => {
  const { canvas, input } = await getTestElements(canvasElement);

  // Test invalid slugs
  await inputAndBlur(input, "My Blog Post");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "my_blog_post");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  await clearAndInputAndBlur(input, "my--blog--post");
  await expectErrorToContain(canvas, ErrorsKeys.NO_REGEX_MATCH);

  // Test valid slugs
  await clearAndInputAndBlur(input, "my-blog-post");
  await expectErrorToNotExist(canvas);

  await clearAndInputAndBlur(input, "blog-post-123");
  await expectErrorToNotExist(canvas);
};

export const SlugValidation: Story = {
  render: (args) => (
    <ValidationTestWrapper
      validationConfig={{ regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/ }}
      label="URL Slug Format"
      placeholder="my-blog-post, blog-post-123"
      {...args}
    />
  ),
  play: async ({ canvasElement }) => {
    await testSlugValidation(canvasElement);
  },
};