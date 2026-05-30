import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MdvNavigationButton from "./mdv-navigation-button";
import { Goal } from "lucide-react";

const meta = {
  component: MdvNavigationButton,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof MdvNavigationButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Credential Cloud",
    icon: <Goal />,
    color: "primary",
  },
};
