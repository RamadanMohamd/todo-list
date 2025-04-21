import { TaskSkeleton } from "@/components/TaskSkeleton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "components/TaskSkeleton",
  component: TaskSkeleton,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: "The `Badge` component is used to show info",
      },
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {};
