import { Chip } from "@mui/material";
import StatusChip from "./ProductStatusChip";
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
    type: "default",
    label: "default Chip",
  },
};

export const Disabled: Story = {
  args: {
    type: "disabled",
    label: "disabled Chip",
  },
};

export const Emphasis: Story = {
  args: {
    type: "emphasis",
    label: "emphasis Chip",
  },
};
