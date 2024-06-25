import { Item } from '../lib/shared/types';

type ItemsShowcaseProps = {
    items: Item[];
};

export const ItemsShowcase = ({ items }: ItemsShowcaseProps) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 w-8/12">
                {items.map(({ title, description }) => (
                    <div key={title} className="flex flex-col gap-2">
                        <img
                            src="/media/checkmark.jpg"
                            width={25}
                            alt="checkmark-image"
                        />
                        <div className="text-2xl font-bold">{title}</div>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
