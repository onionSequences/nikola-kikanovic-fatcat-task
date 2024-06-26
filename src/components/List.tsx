import React from 'react';

interface ListProps<T> {
    data: T[];
    renderItem: (item: T) => React.ReactNode;
    id: keyof T;
}

const List = <T,>({
    data,
    renderItem,
    id,
}: ListProps<T>): React.ReactElement => {
    return (
        <ul className="col-span-full grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {data.map((item, index) => {
                const key = (item[id] || index) as number;
                return (
                    <li
                        key={key}
                        className="flex flex-col gap-4 p-4 bg-white py-6 px-4 rounded-2xl"
                    >
                        {renderItem(item)}
                    </li>
                );
            })}
        </ul>
    );
};

export default List;
