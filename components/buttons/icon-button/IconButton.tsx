export interface IIconButton {
  type?: 'button' | 'submit';
  variant?: 'primary' | 'danger' | 'default';
  size?: 'small' | 'default' | 'large';
  color?: 'bg-fuchsia-600' & string;
  textColor?: 'white' & string;
  children?: any;
  onClick?: () => void;
}

const attributes = {
  variants: {
    primary: 'bg-fuchsia-600 hover:bg-fuchsia-700',
    default: 'bg-blue-600',
    danger: 'bg-red-600',
  },
  sizes: {
    small: 'py-1 px-1 rounded-md',
    default: 'py-2 px-2 rounded-md',
    large: 'py-3 px-3 rounded-lg',
  },
};

const IconButton: React.FC<IIconButton> = ({
  type = 'button',
  variant = 'primary',
  size = 'default',
  textColor = 'text-white',
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${attributes.variants[variant]} ${attributes.sizes[size]} ${textColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
