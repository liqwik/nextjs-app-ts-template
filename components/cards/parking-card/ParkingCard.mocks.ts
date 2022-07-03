import { IParkingCard } from './ParkingCard';

const base: IParkingCard = {
  content: 'O',
  isParked: false,
  onRemoveParking: () => {},
};

export const mockParkingCardProps = {
  base,
};
