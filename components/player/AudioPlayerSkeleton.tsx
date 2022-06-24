import React from 'react';

const AudioPlayerSkeleton: React.FC = () => (
  <div className="shadow rounded-md p-2 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex flex-col items-center">
      <div className="rounded-full bg-slate-200 h-5 w-5"></div>
      <div className="space-y-6 py-1">
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
);

export default React.memo(AudioPlayerSkeleton);
