import clsx from 'clsx';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
    background?: string;
};

export const Layout = ({ children, background }: LayoutProps) => {
    return (
        <section className={clsx('min-h-screen p-8 sm:p-16', background)}>
            {children}
        </section>
    );
};
