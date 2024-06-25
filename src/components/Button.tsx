import clsx from 'clsx';
import { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

export const Button = ({ children, onClick, className }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
