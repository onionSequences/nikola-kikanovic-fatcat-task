import List from '../../components/List';
import { useUsers } from './hooks/useUsers';
import { User } from './types';
import { Layout } from '../../components/Layout';

export const UserList = () => {
    const { users, isLoading, isError } = useUsers();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>We have issue loading the users</p>;
    }
    return (
        <Layout background={'bg-cream'}>
            <h1 className="leading-normal text-3xl mb-10 xl:text-5xl xl:leading-normal text-black">
                Meet Our <span className="text-primary">Fat Cat's</span>
            </h1>
            <List
                id="id"
                data={users!}
                renderItem={(user: User) => (
                    <div className="flex gap-6">
                        <img
                            src={user.image}
                            alt="profile-image"
                            className="h-16 w-16 self-start rounded-full border-2 border-primary dark:border-gray-800"
                        />
                        <div>
                            <p className="text-sm text-gray40">#{user.id}</p>
                            <p className="text-black text-lg leading-normal font-medium">
                                {user.name}
                            </p>
                            <p className="text-gray60 text-sm">
                                {user.username}
                            </p>
                            <a
                                href={`mailto:${user.email.toLowerCase()}`}
                                className="block text-primary mt-2 text-sm"
                            >
                                {user.email.toLowerCase()}
                            </a>
                            <a href={`tel:${user.phone}`} className="text-sm">
                                {user.phone}
                            </a>
                        </div>
                    </div>
                )}
            />
        </Layout>
    );
};
