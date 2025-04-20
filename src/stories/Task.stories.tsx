import { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Task } from "@/components/Task";
import React from "react";

const meta: Meta = {
  title: "Components/Task",
  component: Task,
  tags: ["autodocs"],
  argTypes: {
    onToggle: { action: "toggled" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The `Task` component represents a single task with a title and completion status.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Task>;

const queryClient = new QueryClient();
const withQueryClientProvider = (StoryComponent: React.FC) => (
  <QueryClientProvider client={queryClient}>
    <StoryComponent />
  </QueryClientProvider>
);

export const Default: Story = {
  args: {
    text: "Default Task",
    completed: true,
  },
  decorators: [withQueryClientProvider],
};

export const Completed: Story = {
  args: {
    text: "Completed Task",
    completed: true,
  },
  decorators: [withQueryClientProvider],
};

export const Deleted: Story = {
  args: {
    text: "This is a deleted task",
    completed: false,
    deleted: true,
  },
  decorators: [withQueryClientProvider],
};
