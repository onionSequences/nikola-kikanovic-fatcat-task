import { useQuery } from '@tanstack/react-query';

import { getRandomNumber } from '@homework-task/containers/UserList/hooks/helpers/getRandomNumber';
import { User } from '@homework-task/containers/UserList/types';

const getUsers = async (): Promise<User[]> => {
    const response = await fetch(import.meta.env.VITE_USERS_API);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return (await response.json()) as Promise<User[]>;
};

export const useUsers = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['users', 'list'],
        queryFn: getUsers,
    });

    const users = data?.map((user) => {
        const imgPath = `/media/cats/cat_${getRandomNumber()}.png`;
        return { ...user, image: imgPath };
    });

    return { users, isLoading, isError };
};
