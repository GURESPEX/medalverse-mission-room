import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MdvTypographyBody from "./mdv-typography-body";

const meta = {
  component: MdvTypographyBody,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: {
        type: "radio",
      },
    },
    bold: {
      options: ["bold", "semibold", "medium", "regular"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof MdvTypographyBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    size: "medium",
    bold: "medium",
  },
};
