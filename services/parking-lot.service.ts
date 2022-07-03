class ParkingLotService {
  slots: any[];

  constructor(slotNumber: number) {
    this.slots = new Array(slotNumber).fill(null);
  }

  getSlots() {
    return this.slots;
  }

  getSize() {
    return this.slots.length;
  }

  park(flatNumber: string) {
    const alvSlot = this.slots.findIndex((slot) => slot === null);

    if (alvSlot === -1) return;

    this.slots[alvSlot] = flatNumber;
  }

  remove(flatNumber: string) {
    const idx = this.slots.findIndex((slot) => slot === flatNumber);

    if (idx === -1) return;

    this.slots[idx] = null;
  }

  getTotalParked() {
    return this.slots.filter((slot) => slot !== null).length;
  }

  getAvailable() {
    return this.slots.filter((slot) => slot === null).length;
  }

  isFull() {
    return this.getAvailable() === 0;
  }
}

export default ParkingLotService;
