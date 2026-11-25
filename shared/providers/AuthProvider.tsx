'use client';


import { useEffect } from 'react';
import { useAuthStore } from '../stores/auth';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const isAuth = useAuthStore((s) => s.isAuth);
    const setUser = useAuthStore((s) => s.setUser);
    const clearUser = useAuthStore((s) => s.clearUser);

    useEffect(() => {
        const fetchData = async () => {
            if (isAuth) return;
            try {
                await refresh();
                const user = await getMe();
                setUser(user);
            } catch {
                clearUser();
            }
        };
        fetchData();
    }, []);

  return children;
};

export default AuthProvider;