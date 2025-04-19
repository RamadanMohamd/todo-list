import { Button } from "@/components/ui/Button";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "@/components/ui/Button";

const meta: Meta<ButtonProps> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      control: { type: "select" },
      description: "The visual style of the button.",
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: { type: "radio" },
      description: "The size of the button.",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for the button.",
    },
    onClick: {
      action: "clicked",
      description: "Callback function triggered when the button is clicked.",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The `Button` component is used to trigger actions or events. It supports multiple variants and sizes.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Default Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
    children: "Destructive Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    children: "Outline Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "default",
    children: "Ghost Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    size: "default",
    children: "Link Button",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Large Button",
  },
};

export const Icon: Story = {
  args: {
    variant: "default",
    size: "icon",
    children: "🔍",
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Disabled Button",
    disabled: true,
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="#">Button as Link</a>,
  },
};

export const CustomClass: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Custom Class Button",
    className: "bg-red-500 text-white",
  },
};
