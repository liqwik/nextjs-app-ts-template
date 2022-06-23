import { IIconButton } from './IconButton';

const base: IIconButton = {
  type: 'button',
  variant: 'primary',
  size: 'default',
  children: 'Hello World',
  onClick: () => {},
};

export const mockIconButtonProps = {
  base,
};
