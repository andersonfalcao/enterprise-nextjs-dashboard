"use client";

import { useEffect } from "react";
import { useMe } from "@/features/auth/hooks/use-me";
import { useAuthStore } from "@/features/auth/store/auth-store";


const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { data } = useMe();
    const setUser = useAuthStore((s) => s.setUser);

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data, setUser]);

    return children;
};

export default AuthProvider;