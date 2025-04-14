"use client"
import { createContext, useContext, useMemo, useState } from "react";

const UselessProviderContext = createContext<{
    number: number;
    setNumber: (number: number) => void;
}>({ number: 0, setNumber: () => {} });

export function UselessProvider({ children } : Readonly<{ children: React.ReactNode }>) {
    const [ number, setNumber ] = useState(0);

    const value = useMemo(() => ({ number, setNumber }), [number, setNumber]);

    return (
        <UselessProviderContext.Provider value={value}>
            {children}
        </UselessProviderContext.Provider>
    )
}


export function useUseless() {
  const context = useContext(UselessProviderContext);
  return context;
}