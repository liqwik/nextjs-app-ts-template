import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton, { IIconButton } from './IconButton';
import { mockIconButtonProps } from './IconButton.mocks';

export default {
  title: 'buttons/IconButton',
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <>
      <IconButton {...args} size="small" />
      <IconButton {...args} />
      <IconButton {...args} size="large" />
    </>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockIconButtonProps.base,
} as IIconButton;
