import { ComponentMeta, ComponentStory } from '@storybook/react';
import AudioPlayer, { IAudioPlayer } from './AudioPlayer';
import { mockAudioPlayerProps } from './AudioPlayer.mocks';

export default {
  title: 'templates/AudioPlayer',
  component: AudioPlayer,
  argTypes: {},
} as ComponentMeta<typeof AudioPlayer>;

const Template: ComponentStory<typeof AudioPlayer> = (args) => (
  <AudioPlayer {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockAudioPlayerProps.base,
} as IAudioPlayer;
