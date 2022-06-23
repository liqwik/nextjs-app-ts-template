import { IFlatButton } from './FlatButton';

const base: IFlatButton = {
  type: 'button',
  variant: 'primary',
  size: 'default',
  children: 'Hello World',
  onClick: () => {},
};

export const mockFlatButtonProps = {
  base,
};
