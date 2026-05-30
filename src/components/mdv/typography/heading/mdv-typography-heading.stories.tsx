import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MdvTypographyHeading from "./mdv-typography-heading";

const meta = {
  component: MdvTypographyHeading,
  argTypes: {
    size: {
      options: ["heading-1", "heading-2", "heading-3", "heading-4"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof MdvTypographyHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    size: "heading-1",
  },
};
