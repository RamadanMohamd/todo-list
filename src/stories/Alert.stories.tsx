import { Meta, StoryObj } from "@storybook/react";
import { SuccessAlert } from "@/components/Alert/Alert";
import { useAlertStore } from "@/store/alert";

const meta: Meta<typeof SuccessAlert> = {
  title: "Components/Alert",
  component: SuccessAlert,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The `Alert` component displays messages from the Zustand store.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SuccessAlert>;

export const Success: Story = {
  args: {},
  decorators: [
    (Story) => {
      useAlertStore.getState().showAlert("This is a success alert!");
      return <Story />;
    },
  ],
};
