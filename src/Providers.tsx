import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './providers/LanguageContext';

interface ProviderProps {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers: React.FC<ProviderProps> = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </BrowserRouter>
    </QueryClientProvider>
);

export default Providers;