import { Card } from '@homework-task/containers/Landing/components/Card';

import { cards, vscodeProjectLink } from './constants';

export const Landing = () => {
    return (
        <section className="bg-cream min-h-screen grid grid-cols-1 lg:grid-cols-landing gap-16 place-content-center p-8 sm:p-16">
            <div className="flex flex-col gap-6 items-start self-center w-full">
                <h1 className="leading-normal text-3xl xl:text-5xl xl:leading-normal text-black">
                    Welcome to Fat Cat&#39;s{' '}
                    <span className="text-primary">Homework Task Page</span>
                    -where curiosity meets opportunity.
                </h1>
                <p className="text-gray80 text-2xl">
                    Don&#39;t hesitate to connect if you have any questions.
                </p>
                <a
                    className="flex items-center gap-2 rounded-lg px-4 py-2 bg-black text-white"
                    href={vscodeProjectLink}
                >
                    <span className="text-lg">Read docs</span>
                    <img src="/media/landing/arrow.svg" alt="arrow-icon" />
                </a>
            </div>
            <img
                className="max-w-[600px] lg:max-w-none w-full self-center justify-self-center"
                src="/media/landing/hero.svg"
                alt="fatcat-image"
            />
            <div className="col-span-full grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {cards.map((card) => (
                    <Card
                        key={card.title}
                        title={card.title}
                        text={card.text}
                        link={card.link}
                    />
                ))}
            </div>
        </section>
    );
};
