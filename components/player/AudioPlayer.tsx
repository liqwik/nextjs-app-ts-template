import IconButton from 'components/buttons/icon-button/IconButton';
import IconPause from 'components/icons/IconPause';
import IconPlay from 'components/icons/IconPlay';
import React, { useState } from 'react';
import useSound from 'use-sound';
import AudioPlayerSkeleton from './AudioPlayerSkeleton';

export interface IAudioPlayer {
  id: string;
  title: string;
  src: string;
  bgImg?: string;
}

const AudioPlayer: React.FC<IAudioPlayer> = ({ title, src, bgImg }) => {
  const [play, { pause, sound }] = useSound(src, {
    interrupt: true,
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    if (!isPlaying) {
      sound.loop();
      play();
    } else {
      pause();
    }

    setIsPlaying(!isPlaying);
  };

  const displayDuration = () => {
    if (!sound) return '0:00';

    const duration = Math.floor(sound.duration());
    const hour = Math.floor(duration / 60);
    const second = duration % 60;
    const separator = ':';

    if (hour < 1) {
      return `00${separator}${second}`;
    }

    if (hour < 10) {
      return `0${hour}${separator}${second}`;
    }

    return `${hour}${separator}${second}`;
  };

  return sound ? (
    <IconButton variant="transparent" size="large" onClick={handlePlay}>
      <div className="flex flex-col items-center relative">
        {!isPlaying ? <IconPlay /> : <IconPause />}
        <p>{title}</p>
        <p className="text-fuchsia-300 text-xs">{displayDuration()}</p>
        <div
          className="bg-fixed bg-contain bg-no-repeat bg-center w-8 h-8 rounded border shadow absolute -right-6 -bottom-6"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
      </div>
    </IconButton>
  ) : (
    <AudioPlayerSkeleton />
  );
};

export default AudioPlayer;
