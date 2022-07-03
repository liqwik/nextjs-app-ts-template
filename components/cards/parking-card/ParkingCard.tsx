export interface IParkingCard {
  content: string;
  isParked: boolean;
  onRemoveParking: () => void;
}

const ParkingCard: React.FC<IParkingCard> = ({
  content,
  isParked,
  onRemoveParking,
}) => {
  return (
    <button
      className={`block p-4 rounded-md ${
        isParked ? 'bg-red-400' : 'bg-green-400'
      }`}
      onClick={onRemoveParking}
    >
      {content}
    </button>
  );
};

export default ParkingCard;
