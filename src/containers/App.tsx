import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Sample from '../components/Sample';
import '../i18n';

const App: React.FC = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Sample />
        </QueryClientProvider>
    );
};

export default App;
