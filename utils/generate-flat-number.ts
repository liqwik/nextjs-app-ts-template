const generateNumberPlate = () => {
  const r = (x: any): any => ~~(Math.random() * x) + '';
  const l = (): any => [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'][r(26)];

  return r(10) + r(10) + r(10) + '-' + l() + l() + l();
};

export default generateNumberPlate;
