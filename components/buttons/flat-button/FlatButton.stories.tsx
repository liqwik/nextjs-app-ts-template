import { ComponentMeta, ComponentStory } from '@storybook/react';
import FlatButton, { IFlatButton } from './FlatButton';
import { mockFlatButtonProps } from './FlatButton.mocks';

export default {
  title: 'buttons/FlatButton',
  component: FlatButton,
  argTypes: {},
} as ComponentMeta<typeof FlatButton>;

const Template: ComponentStory<typeof FlatButton> = (args) => {
  return (
    <>
      <FlatButton {...args} size="small" />
      <FlatButton {...args} />
      <FlatButton {...args} size="large" />
    </>
  );
};

export const Base = Template.bind({});

Base.args = {
  ...mockFlatButtonProps.base,
} as IFlatButton;
