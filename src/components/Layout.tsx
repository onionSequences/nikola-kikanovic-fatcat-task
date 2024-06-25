import clsx from 'clsx';
import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
    background?: string;
};

export const Layout = ({ children, background }: LayoutProps) => {
    return <section className={clsx('py-20', background)}>{children}</section>;
};
