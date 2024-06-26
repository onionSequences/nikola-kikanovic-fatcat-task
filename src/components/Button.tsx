import { MouseEventHandler, ReactNode } from 'react';

import clsx from 'clsx';

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
