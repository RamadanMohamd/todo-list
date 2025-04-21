import { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const meta: Meta<typeof Card> = {
  title: "ui/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
    title: {
      control: "text",
      defaultValue: "Card Title",
    },
    content: {
      control: "text",
      defaultValue: "This is the main content of the card.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "This is a customizable Card component with a header, content",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    className: "",
    title: "Card Title",
    content: "This is the main content of the card.",
  },
  render: (args) => (
    <Card className={args.className}>
      <CardHeader>
        <CardTitle>{args.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{args.content}</p>
      </CardContent>
    </Card>
  ),
};
