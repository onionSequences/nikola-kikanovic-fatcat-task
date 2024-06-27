import '@homework-task/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Landing } from '@homework-task/containers/Landing';
import { UserList } from '@homework-task/containers/UserList';
import CreatePostForm from '@homework-task/components/CreatePostForm.tsx';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
                <UserList />
                <CreatePostForm />
            </main>
        </QueryClientProvider>
    );
}

export default App;
