import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MdvTypographyDisplay from "./mdv-typography-display";

const meta = {
  component: MdvTypographyDisplay,
  argTypes: {
    size: {
      options: ["large", "medium"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof MdvTypographyDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    size: "medium",
  },
};
