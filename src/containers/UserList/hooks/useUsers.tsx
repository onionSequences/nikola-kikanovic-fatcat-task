import { useQuery } from '@tanstack/react-query';
import { User } from '../types';
import { getRandomNumber } from './helpers/getRandomNumber';

const getUsers = async (): Promise<User[]> => {
    const response = await fetch(import.meta.env.VITE_USERS_API);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
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
