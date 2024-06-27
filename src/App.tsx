import '@homework-task/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Landing } from '@homework-task/containers/Landing';
import { UserList } from '@homework-task/containers/UserList';
import CreatePostForm from '@homework-task/components/CreatePostForm.tsx';
import PageGenerator from '@homework-task/components/PageGenerator';
import { data } from '@homework-task/components/PageGenerator/constants.tsx';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
                <UserList />
                <CreatePostForm />
                <PageGenerator data={data} />
            </main>
        </QueryClientProvider>
    );
}

export default App;
