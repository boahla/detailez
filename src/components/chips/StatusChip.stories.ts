import { Chip } from "@mui/material";
import StatusChip from "./StatusChip";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Chips",
  component: StatusChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "default",
    label: "default Chip",
  },
};

export const Disabled: Story = {
  args: {
    status: "disabled",
    label: "disabled Chip",
  },
};

export const Emphasis: Story = {
  args: {
    status: "emphasis",
    label: "emphasis Chip",
  },
};
