import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from '@homework-task/App';

import '@homework-task/styles.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
