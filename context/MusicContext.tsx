import { IAudioPlayer } from '@/components/player/AudioPlayer';
import { createFirebaseApp } from '@/lib/firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { createContext, useContext, useEffect, useState } from 'react';

export interface IMusicContext {
  songs: IAudioPlayer[];
}

export const MusicContext = createContext<IMusicContext>({ songs: [] });

export default function MusicProvider({ children }: any) {
  const [songs, setSongs] = useState<IAudioPlayer[]>([]);

  useEffect(() => {
    const app = createFirebaseApp();
    const db = getFirestore(app);
    getMusics(db);
  }, []);

  const getMusics = async (db: any) => {
    const musicsCol = collection(db, 'musics');
    const musicSnapshot = await getDocs(musicsCol);
    const musicList = musicSnapshot.docs.map((doc) => doc.data()) as any;

    setSongs(musicList);
  };

  return (
    <MusicContext.Provider value={{ songs }}>{children}</MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);
