'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ApiKeyContextType = {
  apiKey: string | null;
  setApiKey: (key: string) => void;
  clearApiKey: () => void;
};

const ApiKeyContext = createContext<ApiKeyContextType | undefined>(undefined);

export function ApiKeyProvider({ children }: { children: ReactNode }) {
  const [apiKey, setApiKeyState] = useState<string | null>(null);

  useEffect(() => {
    // Charger la clé API depuis le localStorage lors du montage du composant
    const storedKey = localStorage.getItem('openai-api-key');
    if (storedKey) {
      setApiKeyState(storedKey);
    }
  }, []);

  const setApiKey = (key: string) => {
    localStorage.setItem('openai-api-key', key);
    setApiKeyState(key);
  };

  const clearApiKey = () => {
    localStorage.removeItem('openai-api-key');
    setApiKeyState(null);
  };

  return (
    <ApiKeyContext.Provider value={{ apiKey, setApiKey, clearApiKey }}>
      {children}
    </ApiKeyContext.Provider>
  );
}

export function useApiKey() {
  const context = useContext(ApiKeyContext);
  if (context === undefined) {
    throw new Error('useApiKey doit être utilisé à l\'intérieur d\'un ApiKeyProvider');
  }
  return context;
}
