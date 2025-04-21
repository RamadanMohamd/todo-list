import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "@/components/ui/Badge/Badge";

const meta: Meta<BadgeProps> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "secondary", "destructive", "outline"],
      control: { type: "select" },
      description: "The visual style of the Badge.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "The `Badge` component is used to show info",
      },
    },
  },
};
export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Badge",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Badge",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Badge",
  },
};
