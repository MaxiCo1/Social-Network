import type { Meta, StoryObj } from "@storybook/react";

import UsersLayout from "@/app/(main)/layout";

const meta = {
  title: "Layout/Base",
  component: UsersLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof UsersLayout>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  args: {
    children: <>contenido</>,
  },
};
