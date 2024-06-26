import { Item } from '@homework-task/lib/shared/types';

export type HeroProps = Omit<Item, 'description'>;

export const Hero = ({ title, image }: HeroProps) => {
    return (
        <div className="flex row justify-center items-center gap-4 h-screen">
            <div className="w-4/12">
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            <div className="w-4/12">
                <img
                    src={image}
                    width="100%"
                    alt="hero-image"
                    loading="eager"
                />
            </div>
        </div>
    );
};
