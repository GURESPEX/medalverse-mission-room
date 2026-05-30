import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import MdvButton from "./mdv-button";
import { LibraryBig, Loader } from "lucide-react";

const meta = {
  component: MdvButton,
  argTypes: {
    color: {
      options: ["primary", "secondary", "dark", "danger"],
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "radio",
      },
    },
    rounded: {
      control: {
        type: "boolean",
      },
    },
    iconStart: {
      control: {
        disable: true,
      },
    },
    iconEnd: {
      control: {
        disable: true,
      },
    },
    loadingIcon: {
      control: {
        disable: true,
      },
    },
    loadingIconVisible: {
      options: ["start", "end"],
      control: {
        type: "radio",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof MdvButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NoIcon: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "solid",
    size: "medium",
    rounded: false,
    loadingIcon: <Loader />,
    loadingIconVisible: "start",
    loading: false,
    disabled: false,
  },
};

export const IconStart: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "solid",
    size: "medium",
    rounded: false,
    iconStart: <LibraryBig />,
    loadingIcon: <Loader />,
    loadingIconVisible: "start",
    loading: false,
    disabled: false,
  },
};

export const IconEnd: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "solid",
    size: "medium",
    rounded: false,
    iconEnd: <LibraryBig />,
    loadingIcon: <Loader />,
    loadingIconVisible: "start",
    loading: false,
    disabled: false,
  },
};

export const IconBoth: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "solid",
    size: "medium",
    rounded: false,
    iconStart: <LibraryBig />,
    iconEnd: <LibraryBig />,
    loadingIcon: <Loader />,
    loadingIconVisible: "start",
    loading: false,
    disabled: false,
  },
};
