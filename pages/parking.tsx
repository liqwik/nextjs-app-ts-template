import PrimaryLayout from 'components/layouts/primary/PrimaryLayout';
import SidebarLayout from 'components/layouts/sidebar/SidebarLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ParkingLotService from 'services/parking-lot.service';
import generateNumberPlate from 'utils/generate-flat-number';
import { NextPageWithLayout } from './page';

const Parking: NextPageWithLayout = () => {
  const router = useRouter();

  const [parkingLotService, setParkingLotService] =
    useState<ParkingLotService>();
  const [parkingBoard, setParkingBoard] = useState<any[]>([]);

  useEffect(() => {
    const service = new ParkingLotService(Number(router.query.slot));

    setParkingBoard(service.getSlots());
    setParkingLotService(service);
  }, [router.query]);

  const handleParking = () => {
    const plateNumber = generateNumberPlate();
    parkingLotService?.park(plateNumber);

    setParkingBoard([...parkingLotService!.getSlots()!]);
  };

  const handleRemoveParking = (value: string) => {
    parkingLotService?.remove(value);

    setParkingBoard([...parkingLotService!.getSlots()!]);
  };

  return (
    <div className="w-full h-full bg-slate-100">
      <div className="grid grid-cols-12 h-full">
        <div className="col-span-3 flex flex-col bg-slate-200 items-center justify-between py-16">
          <div>
            <button
              className="block bg-sky-500 hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white px-8 py-2 mb-4 rounded shadow-md"
              disabled={parkingLotService?.isFull()}
              onClick={handleParking}
            >
              Park
            </button>

            <div className="flex items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                Total Parked
              </h3>
              <span className="text-slate-500 group-hover:text-white text-sm">
                {parkingLotService?.getTotalParked()}
              </span>
            </div>
          </div>

          <div className="text-md px-4">
            <p>Instruction:</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Click on Button &quot;Park&quot; to park the car</li>
              <li>Click on the Parked Card to remove the car</li>
              <li>
                The Button &quot;Park&quot; will disable, when there is no
                available slot
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-9 px-2 py-2">
          <div className="grid grid-cols-6 justify-between gap-2">
            {parkingBoard &&
              parkingBoard.map((plg, idx) => {
                const isParked = plg ? 'bg-red-400' : 'bg-green-400';

                return (
                  <button
                    key={idx}
                    className={`block p-4 rounded-md ${isParked}`}
                    onClick={() => handleRemoveParking(plg)}
                  >
                    {plg ? plg : 'O'}
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parking;

Parking.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
