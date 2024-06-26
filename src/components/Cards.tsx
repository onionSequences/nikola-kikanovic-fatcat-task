import { MouseEventHandler } from 'react';

import clsx from 'clsx';

import { Button } from '@homework-task/components/Button';

type Card = {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
};

type CardsProps = {
    cards: Card[];
};

export const Cards = ({ cards }: CardsProps) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 w-8/12">
                {cards.map((card) => (
                    <div
                        key={card.title}
                        className={clsx('rounded-md', 'p-8', card.background)}
                    >
                        <img src={card.image} alt="card-image" width="120" />
                        <div className="my-8">
                            <div className="text-2xl font-bold mb-2">
                                {card.title}
                            </div>
                            <div className="text-xl">{card.description}</div>
                        </div>
                        <Button onClick={card.onClick}>
                            {card.buttonText}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};
