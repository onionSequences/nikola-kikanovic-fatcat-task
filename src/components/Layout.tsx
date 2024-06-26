import { ReactNode } from 'react';

import clsx from 'clsx';

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
