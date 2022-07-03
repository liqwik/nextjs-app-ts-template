import { useRouter } from 'next/router';
import { useState } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const [parkingSlot, setParkingSlot] = useState<number>(0);

  const handleChange = (e: any) => {
    const value = Number(e.target.value);
    setParkingSlot(value);
  };

  const handleSubmit = () => {
    if (!parkingSlot || typeof parkingSlot !== 'number') return;

    router.push({
      pathname: '/parking',
      query: { slot: parkingSlot },
    });
  };

  return (
    <section className="w-full h-full bg-slate-100">
      <h1 className="text-gray-900 text-2xl mb-16">
        Welcome to{' '}
        <span className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 py-2">
          Parking Lots!
        </span>
      </h1>

      <h2 className="text-gray-800 text-lg mb-2">Setup System</h2>

      <div className="grid bg-white rounded-md p-4 max-w-md space-y-8">
        <div className="flex flex-col space-y-2">
          <label htmlFor="parking-slot">Input Parking Slots </label>
          <input
            id="parking-slot"
            type="number"
            max={1000}
            className="w-full py-2 px-4 border rounded-md block"
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-sky-600 text-white py-2 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
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
