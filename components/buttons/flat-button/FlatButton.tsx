export interface IFlatButton {
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
    primary: 'bg-fuchsia-600',
    default: 'bg-blue-600',
    danger: 'bg-red-600',
  },
  sizes: {
    small: 'py-1 px-4',
    default: 'py-2 px-8',
    large: 'py-3 px-12',
  },
};

const FlatButton: React.FC<IFlatButton> = ({
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
      className={`${attributes.variants[variant]} ${attributes.sizes[size]} ${textColor} rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FlatButton;
