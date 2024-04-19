import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

// Define the shape of the context state
interface AuthContextType {
    user: { id: string; name: string } | null;
    login: (user: { id: string; name: string }) => void;
    logout: () => void;
}

// Initialize the context with undefined and forcibly type it
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider with typings for the children prop
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<{ id: string; name: string } | null>(null);

    const login = (userData: { id: string; name: string }) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const value = useMemo(() => ({
        user, login, logout
    }), [user]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
