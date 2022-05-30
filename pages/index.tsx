import { useCallback, useEffect, useState } from 'react';
import {
  emoji,
  gridPerRow,
  maxCell,
  mazesGrid,
  name,
} from '../lib/utils/constant';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);

  const downHandler = useCallback((e: any) => {
    switch (e.keyCode) {
      case 37:
        setSelected((prev) => (prev <= 0 ? prev : prev - 1));
        break;

      case 38:
        setSelected((prev) => (prev - gridPerRow <= 0 ? prev : prev - 3));
        break;

      case 39:
        setSelected((prev) => (prev >= maxCell - 1 ? prev : prev + 1));
        break;

      case 40:
        setSelected((prev) => (prev + gridPerRow > 8 ? prev : prev + 3));
        break;

      default:
        break;
    }
  }, []);

  return (
    <section className="h-screen w-screen">
      <div className="grid grid-cols-3 gap-12 h-full">
        {mazesGrid &&
          mazesGrid.map((maze) => (
            <div
              key={maze}
              className={`${
                maze !== selected ? 'bg-rose-500' : 'bg-rose-300'
              } rounded-lg p-4 text-white h-48 w-48 place-self-center`}
            >
              <p className="text-9xl text-center">{emoji[maze]}</p>
              {maze === selected && (
                <p className="text-2xl text-center">{name[maze]}</p>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Home;
