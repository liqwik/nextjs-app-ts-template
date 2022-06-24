import { IAudioPlayer } from './AudioPlayer';

const base: IAudioPlayer = {
  id: '1',
  title: 'Forest birds',
  src: '/media/forest-birds.wav',
  bgImg:
    'https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
};

const audioMockData: IAudioPlayer[] = [
  {
    id: '1',
    title: 'Forest birds',
    src: '/media/forest-birds.wav',
    bgImg:
      'https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    id: '2',
    title: 'Raining',
    src: '/media/rain-loop.wav',
    bgImg:
      'https://images.pexels.com/photos/2792385/pexels-photo-2792385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    id: '3',
    title: 'River Forest',
    src: '/media/river-forest-birds.wav',
    bgImg:
      'https://images.pexels.com/photos/2792385/pexels-photo-2792385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
  {
    id: '4',
    title: 'Wind Mountain',
    src: '/media/wind-mountain.wav',
    bgImg:
      'https://images.pexels.com/photos/2792385/pexels-photo-2792385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
  },
];

export const mockAudioPlayerProps = {
  base,
  audioMockData,
};
