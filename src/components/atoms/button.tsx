'use client';

const Button = ({ children, onClick }: { children: string | React.ReactNode; onClick: () => any }): React.ReactNode => {
  return (
    <button className={`w-full bg-button-gradient font-bold text-center py-2 rounded-sm duration-150`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;
