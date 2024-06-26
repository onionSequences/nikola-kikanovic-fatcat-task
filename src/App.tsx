import './styles.css';
import { Landing } from './containers/Landing';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserList } from './containers/UserList';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <Landing />
                <UserList />
            </main>
        </QueryClientProvider>
    );
}

export default App;
