import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MdvTypographyCaption from "./mdv-typography-caption";

const meta = {
  component: MdvTypographyCaption,
  argTypes: {
    overline: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof MdvTypographyCaption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    overline: false,
  },
};
