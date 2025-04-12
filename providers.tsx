'use client';

import { ApiKeyProvider } from '@/lib/api/apiKeyContext';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ApiKeyProvider>
        {children}
      </ApiKeyProvider>
    </ThemeProvider>
  );
}
