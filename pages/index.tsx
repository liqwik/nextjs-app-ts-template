import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import SidebarLayout from 'components/layouts/sidebar/SidebarLayout';
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

  useEffect(() => {
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [downHandler]);

  return (
    <section className="h-screen w-screen">
      <div className="grid grid-cols-12 w-full h-full">
        <div className="col-span-3 bg-slate-200">
          <div className="py-2 px-2">
            <p>Introduction</p>
            <p className="text-sm text-gray-600">
              Use arrow key Left, Up, Right, Down to Move
            </p>
          </div>
        </div>

        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-0 w-full h-full">
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
        </div>
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
