import { ComponentMeta, ComponentStory } from '@storybook/react';
import ParkingCard, { IParkingCard } from './ParkingCard';
import { mockParkingCardProps } from './ParkingCard.mocks';

export default {
  title: 'cards/ParkingCard',
  component: ParkingCard,
  argTypes: {},
} as ComponentMeta<typeof ParkingCard>;

const Template: ComponentStory<typeof ParkingCard> = (args) => (
  <ParkingCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockParkingCardProps.base,
} as IParkingCard;
