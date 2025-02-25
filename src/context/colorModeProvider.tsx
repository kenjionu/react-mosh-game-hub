import React, { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';

// Crear el contexto
const ColorModeContext = createContext({
    colorMode: 'dark',
    setColorMode: (color: string) => {},
});

// Proveedor del contexto

interface ColorModeProviderProps {
  children: ReactNode;
}

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [colorMode, setColorMode] = useState('dark');

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useColorMode() {
  return useContext(ColorModeContext);
}