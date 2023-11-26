type Button = {
  className: string;
  children: JSX.Element | string;
  onClick?: () => void;
};

const Button = ({ className, children, onClick }: Button) => {
  return (
    <>
      <button onClick={onClick} type="submit" className={className}>
        {children}
      </button>
    </>
  );
};

export default Button;
