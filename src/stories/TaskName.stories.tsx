import { Meta, StoryObj } from "@storybook/react";
import { TaskName } from "@/components/TaskName";

const meta: Meta = {
  title: "Components/TaskName",
  component: TaskName,
  tags: ["autodocs"],
  argTypes: {
    onToggle: { action: "toggled" },
  },
  parameters: {
    docs: {
      description: {
        component: "The `TaskName` component represents a text for task",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TaskName>;

export const Completed: Story = {
  args: {
    text: "Default Task",
    completed: true,
  },
};

export const NotCompleted: Story = {
  args: {
    text: "Completed Task",
    completed: false,
  },
};
